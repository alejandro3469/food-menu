const { db } = require("@vercel/postgres");
const { dishes, categories } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

//SEED USERS
async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS dishes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category TEXT NOT NULL,
        sizes TEXT NOT NULL,
        image TEXT,
        description TEXT NOT NULL,
        available TEXT NOT NULL
      );
    `;

    console.log(`Created "dishes" table`);

    // Insert data into the "dishes" table
    const insertedUsers = await Promise.all(
      dishes.map(async (dish) => {
        return client.sql`
        INSERT INTO dishes (id, name, category, sizes, image, description, available)
        VALUES (DEFAULT, ${dish.item}, ${dish.category}, ${`${dish.sizes[0].name} ${dish.sizes[0].prize}`}, ${dish.item}, ${dish.description}, ${dish.available});
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

//SEED CATEGORIES
async function seedCategories(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "categories" table`);

    // Insert data into the "categories" table
    const insertedCategories = await Promise.all(
      categories.map(async (category) => {
        return client.sql`
        INSERT INTO categories (id, name)
        VALUES (DEFAULT, ${category.name});
      `;
      })
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      users: insertedCategories,
    };
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCategories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
