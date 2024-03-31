import Form from "@/app/ui/edit-form";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";
import { useState } from "react";

export default async function Page() {
  //const [search, setSearch] = useState("");

  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <main>
      <h1 className={styles.title}>Edit</h1>

      <div className={styles.container}>
        {dishes.map((dish, index) => (
          <div key={index}>
            <Form dish={dish} categories={categories} />
          </div>
        ))}
      </div>
    </main>
  );
}
