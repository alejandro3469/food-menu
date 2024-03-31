import Form from "@/app/ui/edit-form";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import styles from "@/app/ui/form.module.css";

export default async function Page() {
  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <main>
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
