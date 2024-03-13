"use client";

import { Dishes, Categories } from "@/app/lib/definitions";
import { updateDish } from "@/app/lib/actions";
import styles from "./form.module.css";

import Link from "next/link";
import { Button } from "@/app/ui/button";
import { fetchCategories, fetchDishes } from "@/app/lib/data";

export default function EditInvoiceForm({
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

      <label className={styles.label} htmlFor="name">
        Precios
      </label>
      {dish.sizes.map((size, index) => (
        <div key={index} className="precios">
          <input
            id={`sizename${index + 1}`}
            name={`sizename${index + 1}`}
            type="text"
            className={styles.input}
            placeholder={size.name}
          />
          <input
            id={`sizeprice${index + 1}`}
            name={`sizeprice${index + 1}`}
            type="text"
            className={styles.input}
            placeholder={`$ ${size.prize}`}
          />
        </div>
      ))}

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
