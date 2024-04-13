import Form from "@/app/ui/delete-form";

import Form2 from "@/app/ui/delete-category";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";
import Search from "@/app/ui/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <>
      <h1 className={styles.title}>Eliminar</h1>

      <Search placeholder="Buscar" />

      <div className={styles.container}>
        <h2 className="subtitle1">Platillos</h2>
        {query != "" &&
          dishes.map(
            (dish, index) =>
              dish.name.toLowerCase().indexOf(query.toLowerCase()) != -1 && (
                <div key={index}>
                  <Form dish={dish} categories={categories} />
                </div>
              )
          )}
        {query == "" &&
          dishes.map((dish, index) => (
            <div key={index}>
              <Form dish={dish} categories={categories} />
            </div>
          ))}
      </div>
      <div className={styles.container}>
        <h2 className="subtitle1">Categorias</h2>
        {query != "" &&
          categories.map(
            (category, index) =>
              category.name.toLowerCase().indexOf(query.toLowerCase()) !=
                -1 && (
                <div key={index}>
                  <Form2 dish={category} categories={categories} />
                </div>
              )
          )}
        {query == "" &&
          categories.map((category, index) => (
            <div key={index}>
              <Form2 dish={category} categories={categories} />
            </div>
          ))}
      </div>
    </>
  );
}
