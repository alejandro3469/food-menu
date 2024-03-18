import Image from "next/image";
import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import List from "../List";
import { Dishes, Categories } from "@/app/lib/definitions";
import { FiExternalLink } from "react-icons/fi";
import { VscLinkExternal } from "react-icons/vsc";
import Menu from "../Menu";

const nunito = Roboto({ weight: "300", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

import { fetchDishes, fetchCategories } from "@/app/lib/data";

import { Kalnia } from "next/font/google";
import Link from "next/link";
import MenuPage from "../MenuPage";
const kalnia = Kalnia({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={nunito.className}>
      <MenuPage>
        <Menu mode={0} />
      </MenuPage>
    </main>
  );
}
