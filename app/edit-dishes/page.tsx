import Form from "@/app/ui/edit-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchDishes } from "@/app/lib/data";
import styles from "../ui/form.module.css";

export default async function Page() {
  const dishes = await fetchDishes();
  return (
    <main>
      <div className={styles.container}>
        {dishes.map((dish, index) => (
          <div key={index}>
            <Form dish={dish} />
          </div>
        ))}
      </div>
    </main>
  );
}
