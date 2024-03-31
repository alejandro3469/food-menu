import Form from "@/app/ui/delete-form";

import Form2 from "@/app/ui/delete-category";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";

export default async function Page() {
  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <main>
      <h1>Delete</h1>

      <div className={styles.container}>
        {dishes.map((dish, index) => (
          <div key={index}>
            <Form dish={dish} categories={categories} />
          </div>
        ))}
      </div>
      <div className={styles.container}>
        <h2>Categorias</h2>
        {categories.map((category, index) => (
          <div key={index}>
            <Form2 dish={category} categories={categories} />
          </div>
        ))}
      </div>
    </main>
  );
}
