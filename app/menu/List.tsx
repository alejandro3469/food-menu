import React from "react";
import Dish from "./Dish";
import styles from "@/app/menu/list.module.css";
import { Open_Sans } from "next/font/google";
export const roboto_slab = Open_Sans({ subsets: ["latin"], display: "swap" });

import { FaShrimp } from "react-icons/fa6";

export default function List({
  title,
  category,
}: {
  title: string;
  category: any[]
}) {
  return (
    <div className={`${styles.container} ${roboto_slab.className}`}>
      <span className={styles.decoration} />

      <h2 className={styles.title}>
        <span className={styles.icon_title}>
          <FaShrimp />
          {title}
        </span>{" "}
        <span className={styles.items}>{"(4 platillos)"}</span>
      </h2>
      <ul>
        {category.map((i, index) => (
          <li key={index}>
            <Dish
              image={i.image}
              name={i.item}
              prize={i.cost}
              description={i.description}
              height={1}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
