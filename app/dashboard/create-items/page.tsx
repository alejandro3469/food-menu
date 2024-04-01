import Form from "@/app/ui/create-form";

import Form2 from "@/app/ui/create-categories";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";

export default async function Page() {
  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <>
      <h1 className={styles.title}>Crear</h1>

      <div className={styles.container}>
        <div>
          {"Platillos"}
          <Form dish={"dish"} categories={categories} />
        </div>
        <div>
          {"Categorias"}
          <Form2 dish={"dish"} categories={categories} />
        </div>{" "}
      </div>
    </>
  );
}
