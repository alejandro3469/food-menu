'use server';
import { sql } from '@vercel/postgres';
import { z } from 'zod';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const FormSchema = z.object({
  id: z.string(),
  dishId: z.string(),
  name: z.string(),
  category: z.string(),
  image: z.string(),
  description: z.string(),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export async function createDish(formData: FormData) {
  const { dishId, name, category, image, description } = CreateInvoice.parse({
    dishId: formData.get('customerId'),
    name: formData.get('amount'),
    category: formData.get('category'),
    image: formData.get('amount'),
  });

  const date = new Date().toISOString().split('T')[0];

  // Test it out:
  console.log(`rawFormData`);
  await sql`
      INSERT INTO dishes (id, name, category, sizes, image, description)
      VALUES (${dishId}, ${name}, ${name}, ${name}, ${name}, ${name})
    `;
  revalidatePath('/dashboard');
  redirect('/menu');
}

// Update Dish Action
const UpdateDish = FormSchema.omit({ id: true, date: true });
export async function updateDish(id: string, formData: FormData) {
  const { dishId, name, category, image, description } = UpdateDish.parse({
    dishId: formData.get('name'),
    name: formData.get('name'),
    category: formData.get('category'),
    image: formData.get('name'),
    description: formData.get('description'),
  });

  const sizes = '' 
  if(formData.get('sizename2') != '' || formData.get('sizeprice2') != '') {
    jsonSchema.parse([{ 'name': `${formData.get('sizename1')}`, 'prize': `${formData.get('sizeprice1')}` }],
  );

  }
  if (name === '') {
    console.log('lol')
  } else {
    await sql`
      UPDATE dishes
      SET name = ${name}
      WHERE id = ${id}
    `;
  }
  if (sizes === '') {
    console.log(sizes)
  } else {
    await sql`
      UPDATE dishes
      SET sizes = ${sizes}
      WHERE id = ${id}
    `;
  }
  if (category == '') {
    console.log('lol')
  } else {
    await sql`
      UPDATE dishes
      SET category = ${category}
      WHERE id = ${id}
    `;
  }
  if (description === '') {
    console.log('lol')
  } else {
    await sql`
      UPDATE dishes
      SET description = ${description}
      WHERE id = ${id}
    `;
  }


  revalidatePath('/edit-dishes');
  redirect('/edit-dishes');
}