import React from "react";
import styles from "@/app/menu/dish.module.css";
import Image from "next/image";

import { Open_Sans } from "next/font/google";
export const roboto_slab = Open_Sans({ subsets: ["latin"], display: "swap" });

export default function Dish({
  image,
  name,
  sizes,
  description,
  available,
  height,
}: {
  image: string;
  name: string;
  sizes: any;
  description: string;
  available: string;
  height: number;
}) {
  return (
    <div className={`${styles.container_simple}`}>
      <div className={styles.name_des}>
        {" "}
        <h3 className={styles.name_simple}>{name} </h3>
        {description != "" && (
          <p className={styles.desctiption_simple}>{description}</p>
        )}
      </div>
      <div className={styles.prize_simple}>
        <span>{sizes && <>{sizes.replace(/,/g, "\r\n")}</>}</span>
        {/*<div>
              <span>{sizes.name} </span>
              <span>${sizes.prize}</span>
            </div>*/}
        {available == "available" ? (
          <span className={styles.available}>
            <span className={styles.circle}></span> Disponible
          </span>
        ) : (
          <span className={styles.available}>
            <span className={styles.circle_red}></span> Agotado
          </span>
        )}
      </div>
    </div>
  );
}
