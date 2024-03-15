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

const sizesSchema = z.string();

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


  let sizes;

  if (formData.has("sizename1") && (formData.has("sizename2") == false)) {
    console.log('TRUEEEEEEEEEE')
    sizes = jsonSchema.parse([{ 'name': `${formData.get('sizename1')}`, 'prize': `${formData.get('sizeprice1')}` }])
  }

  if (formData.has("sizename2") && (formData.has("sizename3") == false)) {
    console.log('TRUEEEEEEEEEE')
    sizes = jsonSchema.parse([{ 'name': `${formData.get('sizename1')}`, 'prize': `${formData.get('sizeprice1')}` }, { 'name': `${formData.get('sizename2')}`, 'prize': `${formData.get('sizeprice2')}` }])
  }

  //const size1;
  //if (formData.has('sizename1')) {
  const size1 = sizesSchema.parse(formData.get('sizename1'))
  //}

  let size2;
  if (formData.has('sizename2')) {
    size2 = sizesSchema.parse(formData.get('sizename2'))
  }
  let prize1;
  if (formData.has('sizeprize2')) {
    prize1 = sizesSchema.parse(formData.get('sizeprize1'))
  }
  let prize2;
  if (formData.has('sizeprize2')) {
    prize2 = sizesSchema.parse(formData.get('sizeprize2'))
  }


  if (name == '') {
    console.log('lol')
  } else {
    await sql`
      UPDATE dishes
      SET name = ${name}
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
  if (description == '') {
    console.log(`${id} HMMMM`)
  } else {
    await sql`
      UPDATE dishes
      SET description = ${description}
      WHERE id = ${id}
    `;
  }

  if (size1 == null || size1 == undefined || size1 == '') {
    console.log(id)
  } else {
    console.log(id)
    console.log(size1)
    console.log('updated SIZEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
    await sql`UPDATE dishes
    SET sizes[1] = jsonb_set(sizes[1], '{name}', '"Lol"', false)
    WHERE id = '126eed9c-c90c-4ef6-a4a8-fcf7408d3c72'`;

  } // WORKING ON IT
  await sql`UPDATE dishes
    SET sizes[1] = jsonb_set(sizes[1], '{name}', '"cant make it work YET"', false)
    WHERE id = '126eed9c-c90c-4ef6-a4a8-fcf7408d3c74'`;
  console.log('------------ U P D A T E D --- W O R K E D ------------')



  revalidatePath('/edit-dishes');
  redirect('/edit-dishes');
}