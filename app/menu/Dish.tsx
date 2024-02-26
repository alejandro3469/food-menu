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
  height,
}: {
  image: string;
  name: string;
  sizes: any[];
  description: string;
  height: number;
}) {
  return (
    <div className={`${styles.container}`}>
      <span className={styles.extra_square} />
      <div className={styles.image_container}>
        <p className={styles.desctiption}>{description}</p>
        <Image
          className={styles.image}
          alt="platillo"
          src={image}
          width={200}
          height={300}
        />
      </div>
      <div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.prize}>
          {sizes.length >= 2 && (
            <>
              {sizes.map((size, index) => (
                <div key={index}>
                  <span>{size.name} </span>
                  <span>${size.prize}</span>
                </div>
              ))}
            </>
          )}
          {sizes.length === 1 && sizes[0].prize && <>${sizes[0].prize}</>}
        </div>
      </div>
    </div>
  );
}
