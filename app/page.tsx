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
      <Link href="/menu">Menu</Link>
      <Link href="/dashboard">Dashboard</Link>
      {/*<Link href="/126eed9c-c90c-4ef6-a4a8-fcf7408d3c66/edit">Edit</Link>*/}
      <Link href="/edit-dishes">Edit Dishes</Link>
    </main>
  );
}
