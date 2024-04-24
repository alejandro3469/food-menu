import Form from "@/app/ui/edit-form";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";
import { Suspense } from 'react';
import Search from "@/app/ui/search";



export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <>
      <h1 className={styles.title}>Editar/Modificar</h1>

      <Search placeholder="Search invoices..." />

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
