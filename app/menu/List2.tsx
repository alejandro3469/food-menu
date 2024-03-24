import React from "react";
import Dish2 from "./Dish2";
import styles from "@/app/menu/list.module.css";
import { Open_Sans, Corinthia } from "next/font/google";

const corinthia = Corinthia({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const roboto_slab = Open_Sans({ subsets: ["latin"], display: "swap" });

import { Kalnia } from "next/font/google";
const kalnia = Kalnia({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { FaShrimp } from "react-icons/fa6";
import { GiSodaCan } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { LuCakeSlice } from "react-icons/lu";
import { MdOutlineLocalDrink } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { LuSoup } from "react-icons/lu";

export default function List({
  title,
  category,
}: {
  title: string;
  category: any[];
}) {
  return (
    <div id={title} className={`${styles.container_simple}`}>
      <span className={styles.decoration} />

      <h3 className={`${styles.title}`}>
        {/*<span className={styles.icon_title}>
          {title === "Mariscos" && <FaShrimp />}
          {title === "Bebidas" && <MdOutlineEmojiFoodBeverage />}
          {title === "Pozole" && <LuSoup />}
          {title === "Postres" && <LuCakeSlice />}
          {title}
        </span>{" "}
  <span className={styles.items}>{"(4 platillos)"}</span>*/}
        {title}
      </h3>
      <ul>
        {category.map(
          (i, index) =>
            i.category.replace(/\s/g, "") == title.replace(/\s/g, "") && (
              <li key={index}>
                <Dish2
                  image={i.image}
                  name={i.name}
                  sizes={i.sizes}
                  description={i.description}
                  available={i.available}
                  height={1}
                />
              </li>
            )
        )}
      </ul>
    </div>
  );
}
