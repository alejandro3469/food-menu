"use client";

import { Dishes, Categories } from "@/app/lib/definitions";
import { deleteCategory } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { fetchCategories, fetchDishes } from "@/app/lib/data";

export default function EditForm({
  dish,
  categories,
}: {
  //dish: Dishes;

  dish: Dishes;
  categories: any[];
}) {
  const updateInvoiceWithId = deleteCategory.bind(null);

  return (
    <form className={styles.form} action={updateInvoiceWithId}>
      <label className={styles.label}>
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        placeholder={dish.name}
        value={dish.name}
      />

      <button className={styles.button} type="submit">
        Eliminar
      </button>
    </form>
  );
}
