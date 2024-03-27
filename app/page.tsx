import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { fetchDishes } from "@/app/lib/data";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });

const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const dishes = await fetchDishes();
  return (
    <main>
      <Link href="/menu/simple">Menu</Link>
      <Link href="/edit-dishes">Edit Dishes</Link>
      <Link href="/create-items">Create Items</Link>
    </main>
  );
}
