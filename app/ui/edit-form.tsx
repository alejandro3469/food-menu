"use client";

import { Dishes } from "@/app/lib/definitions";
import { updateDish } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function EditInvoiceForm({ dish }: { dish: Dishes }) {
  const updateInvoiceWithId = updateDish.bind(null, dish.id);

  return (
    <form className={styles.form} action={updateInvoiceWithId}>
      <label className={styles.label} htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        placeholder={dish.name}
      />
      <label className={styles.label} htmlFor="name">
        Categoria
      </label>
      <input
        id="category"
        name="category"
        type="text"
        className={styles.input}
        placeholder={dish.category}
      />
      <label className={styles.label} htmlFor="name">
        Descripcion
      </label>
      <textarea
        id="description"
        name="description"
        className={styles.input}
        placeholder={dish.description}
      />
      <button className={styles.button} type="submit">
        Guardar
      </button>
    </form>
  );
}