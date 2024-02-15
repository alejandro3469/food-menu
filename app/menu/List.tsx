import React from "react";
import Dish from "./Dish";
import styles from "@/app/menu/list.module.css";
import { Open_Sans } from "next/font/google";
export const roboto_slab = Open_Sans({ subsets: ["latin"], display: "swap" });

export default function List() {
  return (
    <div className={`${styles.container} ${roboto_slab.className}`}>
        <span className={styles.decoration} />
      <h2 className={styles.title}>Mariscos</h2>
      <ul>
        <li>
          <Dish
            image={"/camaron.jpg"}
            name={"Empanada de camarón"}
            prize={"65.00"}
            description={
              "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate"
            }
          />
        </li>
        <li>
          <Dish
            image={"/caldo.jpg"}
            name={"Caldo de camarón"}
            prize={"65.00"}
            description={
              "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate"
            }
          />
        </li>
        <li>
          <Dish
            image={"/tostada.jpg"}
            name={"Tostada de camarón"}
            prize={"65.00"}
            description={
              "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate"
            }
          />
        </li>
        <li>
          <Dish
            image={"/filete.jpg"}
            name={"Filete de pescado"}
            prize={"65.00"}
            description={
              "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate"
            }
          />
        </li>
      </ul>
    </div>
  );
}
