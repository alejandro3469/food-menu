const { db } = require("@vercel/postgres");
const { dishes } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS dishes (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category TEXT NOT NULL,
        sizes TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL
      );
    `;

    console.log(`Created "dishes" table`);

    // Insert data into the "dishes" table
    const insertedUsers = await Promise.all(
      dishes.map(async (dish) => {
        return client.sql`
        INSERT INTO dishes (id, name, category, sizes, image, description)
        VALUES (${dish.id}, ${dish.item}, ${dish.category}, ${dish.sizes[0].prize}, ${dish.image}, ${dish.description})
        ON CONFLICT (id) DO NOTHING;
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

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
