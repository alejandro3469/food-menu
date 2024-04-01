import Form from "@/app/ui/edit-form";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";
import { useState } from "react";

export default async function Page() {

  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <>
      <h1 className={styles.title}>Editar/Modificar</h1>

      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search}
      <div className={styles.container}>
        {dishes.map((dish, index) => (
          <div key={index}>
            <Form dish={dish} categories={categories} />
          </div>
        ))}
      </div>
    </>
  );
}
