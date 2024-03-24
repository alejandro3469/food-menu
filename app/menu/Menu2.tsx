import Image from "next/image";
import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import List2 from "./List2";
import { Dishes, Categories } from "@/app/lib/definitions";
import { FiExternalLink } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";

const nunito = Roboto({ weight: "300", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { fetchDishes, fetchCategories } from "@/app/lib/data";

import { Kalnia } from "next/font/google";
import Link from "next/link";
const kalnia = Kalnia({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default async function Menu({ mode }: { mode: any }) {
  const dishes = await fetchDishes();

  const categories = await fetchCategories();

  return (
    <span className={nunito.className}>
      <>
        {/* <div className="cats_nav">
          {categories.map((category, index) => (
            <a key={index} href={`#${category.name}`}>
              {category.name}
            </a>
          ))}
          </div>*/}
        <div className="lists">
          {categories.map((category, index) => (
            <List2 key={index} title={category.name} category={dishes} />
          ))}
        </div>
      </>
    </span>
  );
}
