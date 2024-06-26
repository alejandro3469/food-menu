"use client";

import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { LiaEdit } from "react-icons/lia";
import { IoAddSharp } from "react-icons/io5";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiFoodMenu } from "react-icons/bi";
import styles from "./dashboard.module.css";

import { Roboto } from "next/font/google";
import { fetchDishes, fetchCategories } from "@/app/lib/data";
import { PiNotebook } from "react-icons/pi";

import { usePathname } from "next/navigation";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });

const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function Dashboard({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className={`${roboto.className}`}>
      <div className={styles.mobile_navbar}>
        {/*<div>
          <div>
            <h3>Dishes</h3>
            <span>{dishes.length}</span>
          </div>
          <div>
            <h3>Categories</h3>
            <span>{categories.length}</span>
          </div>{" "}
        </div>*/}

        <Link className={`${styles.dashboard_link}`} href="/la-casa-de-las-gargolas">
          <span className={styles.menu_icon}>
            <PiNotebook />
          </span>
          <span className={styles.text}>Menu</span>
        </Link>
        <Link
          className={`${
            pathname.toString() != "/la-casa-de-las-gargolas/dashboard"
              ? styles.dashboard_link
              : styles.active
          }`}
          href="/la-casa-de-las-gargolas/dashboard/"
        >
          <span className={styles.menu_icon}>
            <LiaEdit />
          </span>
          <span className={styles.text}>Edit</span>
        </Link>
        <Link className={`${
            pathname.toString() != "/la-casa-de-las-gargolas/dashboard/create-items"
              ? styles.dashboard_link
              : styles.active
          }`} href="/la-casa-de-las-gargolas/dashboard/create-items">
          <span className={styles.menu_icon}>
            <IoAddSharp />
          </span>
          <span className={styles.text}>Create</span>
        </Link>
        <Link  className={`${
            pathname.toString() != "/la-casa-de-las-gargolas/dashboard/delete-items"
              ? styles.dashboard_link
              : styles.active
          }`} href="/la-casa-de-las-gargolas/dashboard/delete-items">
          <span className={styles.menu_icon}>
            <PiTrashSimpleLight />
          </span>
          <span className={styles.text}>Delete</span>
        </Link>
      </div>
      <div className={styles.dashboard_container}>{children}</div>
    </main>
  );
}
