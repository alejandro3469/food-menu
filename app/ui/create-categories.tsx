"use client";

import { Dishes, Categories } from "@/app/lib/definitions";
import { updateDish } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { fetchCategories, fetchDishes } from "@/app/lib/data";
import { createCategory } from "../lib/actions";

export default function CreateCategories({
  dish,
  categories,
}: {
  dish: string;
  categories: any[];
}) {
  const updateInvoiceWithId = createCategory.bind(null);

  return (
    <form className={styles.form} action={updateInvoiceWithId}>
      <label className={styles.label}>Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        placeholder={""}
      />

      <button className={styles.button} type="submit">
        Guardar
      </button>
    </form>
  );
}
