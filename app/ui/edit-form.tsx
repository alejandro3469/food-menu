"use client";

import { Dishes, Categories } from "@/app/lib/definitions";
import { updateDish } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { fetchCategories, fetchDishes } from "@/app/lib/data";

export default function EditForm({
  dish,
  categories,
}: {
  dish: Dishes;
  categories: any[];
}) {
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

      <label className={styles.label} htmlFor="category">
        Categoria
      </label>
      <select name="category" id="category">
        <option value="">{dish.category}</option>
        {categories.map((category: any, index) =>
          category.name != dish.category ? (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ) : (
            ""
          )
        )}
      </select>

      <label className={styles.label} htmlFor="size1">
        Precios
      </label>
      <input
        id="size1"
        name="size1"
        type="text"
        className={styles.input}
        placeholder={dish.sizes}
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

      <div>
        <input
          type="checkbox"
          id="available"
          name="available"
          value={"available"}
        />
        <label htmlFor="scales">Disponible</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="unavailable"
          name="unavailable"
          value={"unavailable"}
        />
        <label htmlFor="scales">Agotado</label>
      </div>
      <button className={styles.button} type="submit">
        Guardar
      </button>
    </form>
  );
}
