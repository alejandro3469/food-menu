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
const FormSchema2 = z.object({
  id: z.string(),
  dishId: z.string(),
  name: z.string(),
  category: z.string(),
  sizes: z.string(),
  image: z.string(),
  description: z.string(),
  date: z.string(),
});
const FormSchema3 = z.object({
  id: z.string(),
  dishId: z.string(),
  name: z.string(),
  date: z.string(),
});

const FormSchema4 = z.object({
  id: z.string(),
  name: z.string(),
});

const sizesSchema = z.string();

const CreateInvoice = FormSchema2.omit({ id: true, date: true });

const CreateCategory = FormSchema3.omit({ id: true, date: true });

const DeleteDish = FormSchema4.omit({ id: true, date: true });

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
const jsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);


//--\-|----\-----|----\-----|--\--\-------|--\-------|-----\-------|-\--------|---\--------|-----\-|------\---
export async function createDish(formData: FormData) {
  const { dishId, name, category, sizes, image, description } = CreateInvoice.parse({
    dishId: formData.get('name'),
    name: formData.get('name'),
    category: formData.get('category'),
    sizes: formData.get('size1'),
    image: formData.get('name'),
    description: formData.get('description'),
  });

  const date = new Date().toISOString().split('T')[0];

  // Test it out:
  console.log(`rawFormData`);
  await sql`
      INSERT INTO dishes (id, name, category, sizes, image, description, available)
      VALUES (${dishId}, ${name}, ${category}, ${sizes}, ${image}, ${description}, ${description})
    `;
  revalidatePath('/create-items');
  redirect('/menu/simple');
}//---\------|---\------|-----\--|------\-------|--\-------|----\------|----\----|------\--------\|----------

//--\-|----\-CATEGORIES----|----\----CATEGORIES -|--\--\-------|--\---CATEGORIES----|-----\-------|-\-----CATEGORIES---|---\--------|-----\-|------\---
export async function createCategory(formData: FormData) {
  const { dishId, name } = CreateCategory.parse({
    dishId: formData.get('name'),
    name: formData.get('name')
  });

  const date = new Date().toISOString().split('T')[0];

  // Test it out:
  console.log(`rawFormData`);
  await sql`
      INSERT INTO categories (id, name)
      VALUES (${dishId}, ${name})
    `;
  revalidatePath('/create-items');
  redirect('/menu/simple');
}//---\--CATEGORIES----|---\-----CATEGORIES-|-----\-CATEGORIES-|------\-------|--\---CATEGORIES----|----\CATEGORIES-----|----\----|------\--------\|----------





//--\-|----\-DELETE----|----\----DELETE -|--\--\-------|--\---DELETE----|-----\-------|-\-----DELETE---|---\--------|-----\-|------\---
export async function deleteCategory(formData: FormData) {
  //const { name } = DeleteDish.parse({
  //});

  const date = new Date().toISOString().split('T')[0];
  const name = sizesSchema.parse(formData.get('name'));


  // Test it out:
  console.log(`rawFormData DELETE = ${name}`);
  await sql`DELETE FROM dishes WHERE name = ${name}`;
  revalidatePath('/edit-dishes');
  redirect('/menu/simple');
}//---\--DELETE----|---\-----DELETE-|-----\-DELETE-|------\-------|--\---DELETE----|----\DELETE-----|----\----|------\--------\|----------
//--\-|----\-DELETE----|----\----DELETE -|--\--\-------|--\---DELETE----|-----\-------|-\-----DELETE---|---\--------|-----\-|------\---
export async function deleteCategory2(formData: FormData) {
  //const { name } = DeleteDish.parse({
  //});

  const date = new Date().toISOString().split('T')[0];
  const name = sizesSchema.parse(formData.get('name'));


  // Test it out:
  console.log(`rawFormData DELETE = ${name}`);
  await sql`DELETE FROM categories WHERE name = ${name}`;
  revalidatePath('/edit-dishes');
  redirect('/menu/simple');
}//---\--DELETE----|---\-----DELETE-|-----\-DELETE-|------\-------|--\---DELETE----|----\DELETE-----|----\----|------\--------\|----------




// Update Dish Action
const UpdateDish = FormSchema.omit({ id: true, date: true });
export async function updateDish(id: string, formData: FormData) {
  const { dishId, name, category, image, description } = UpdateDish.parse({
    dishId: formData.get('idd'),
    name: formData.get('name'),
    category: formData.get('category'),
    image: formData.get('name'),
    description: formData.get('description'),
  });

  console.log(formData.get('unavailable') + "=" + typeof (formData.get('unavailable')));
  const size1 = sizesSchema.parse(formData.get('size1'));

  let available;
  let unavailable;
  if (formData.get('available')) {
    available = sizesSchema.parse(formData.get('available'));
  }
  if (formData.get('unavailable')) {
    unavailable = sizesSchema.parse(formData.get('unavailable'));
  }

  const precios2 = sizesSchema.parse(formData.get('precios2'));



  if (name == dishId) {
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
  if (size1 == precios2) {
    console.log(`${id} HMMMM`)
  } else {
    await sql`
      UPDATE dishes
      SET sizes = ${size1}
      WHERE id = ${id}
    `;
  }
  if (available == '' || available == null || available != 'available') {
    console.log(`${id} HMMMM`)
  } else {
    await sql`
      UPDATE dishes
      SET available = ${available}
      WHERE id = ${id}
    `;
  }
  if (unavailable == '' || unavailable == null || unavailable != 'unavailable') {
    console.log(`${id} HMMMM`)
  } else {
    await sql`
      UPDATE dishes
      SET available = ${unavailable}
      WHERE id = ${id}
    `;
  }

  revalidatePath('/edit-dishes');
  redirect('/menu/simple');
}