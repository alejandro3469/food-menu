import { sql } from "@vercel/postgres";
import { Dishes } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchDishes() {
  noStore();
  try {
    console.log('Fetching dishes data...');
    const data = await sql<Dishes>`SELECT * FROM dishes`;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

export async function fetchDishById(id: string) {
  noStore();
  try {
    const data = await sql<Dishes>`
      SELECT
        dishes.id,
        dishes.image,
        dishes.name,
        dishes.sizes,
        dishes.description
      FROM dishes
      WHERE dishes.id = ${id};
    `;

    const invoice = data.rows;

    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch dish.');
  }
}