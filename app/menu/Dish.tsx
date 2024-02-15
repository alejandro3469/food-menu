import React from "react";
import styles from "@/app/menu/dish.module.css";
import Image from "next/image";

import { Open_Sans } from "next/font/google";
export const roboto_slab = Open_Sans({ subsets: ["latin"], display: "swap" });

export default function Dish({
  image,
  name,
  prize,
  description,
}: {
  image: string;
  name: string;
  prize: string;
  description: string;
}) {
  return (
    <div className={`${styles.container} ${roboto_slab.className}`}>
      <span className={styles.extra_square} />
      <Image
        className={styles.image}
        alt="platillo"
        src={image}
        width={200}
        height={200}
      />
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.prize}>${prize}</div>
        {/*<p>{description}</p>*/}
      </div>
    </div>
  );
}
