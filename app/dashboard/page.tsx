import Form from "@/app/ui/edit-form";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";
import { Suspense } from "react";
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
  const currentPage = Number(searchParams?.page) || 1;

  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <>
      <h1 className={styles.title}>Editar/Modificar</h1>

      {query}

      <Search placeholder="Search invoices..." />

      <div className={styles.container}>
        {query != "" &&
          dishes.map(
            (dish, index) =>
              dish.name.toLowerCase().indexOf(query.toLowerCase()) != -1 && (
                <div key={index}>
                  <Form dish={dish} categories={categories} />
                  {dish.name}
                  {dish.name.indexOf(query)}
                </div>
              )
          )}
        {query == "" &&
          dishes.map((dish, index) => (
            <div key={index}>
              <Form dish={dish} categories={categories} />
              {dish.name}
            </div>
          ))}
      </div>
    </>
  );
}
