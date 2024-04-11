"use client";

import { Dishes, Categories } from "@/app/lib/definitions";
import { updateDish } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { fetchCategories, fetchDishes } from "@/app/lib/data";
import { createDish } from "../lib/actions";

export default function EditForm({
  dish,
  categories,
}: {
  dish: string;
  categories: any[];
}) {
  const updateInvoiceWithId = createDish.bind(null);

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

      <label className={styles.label}>Categoria</label>
      <select name="category" id="category">
        <option value=""></option>
        {categories.map((category: any, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <label className={styles.label}>Precios</label>
      <input
        id="size1"
        name="size1"
        type="text"
        className={styles.input}
        placeholder={""}
      />

      <label className={styles.label}>Descripcion</label>
      <textarea
        id="description"
        name="description"
        className={styles.input}
        placeholder={""}
      />

      <button className={styles.button} type="submit">
        Guardar
      </button>
    </form>
  );
}
