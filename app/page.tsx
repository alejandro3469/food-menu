import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";

import { Roboto } from "next/font/google";
import { fetchDishes, fetchCategories } from "@/app/lib/data";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });

const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default async function Home() {
  const dishes = await fetchDishes();
  const categories = await fetchCategories();
  return (
    <main>
      <div>
        <div>
          <h3>Dishes</h3>
          <span>{dishes.length}</span>
        </div>
        <div>
          <h3>Categories</h3>
          <span>{categories.length}</span>
        </div>{" "}
      </div>
      <Link className="dashboard-link" href="/menu/simple">
        Menu <BsArrowUpRight />
      </Link>
      <Link className="dashboard-link" href="/edit-dishes">
        Edit Dishes <BsArrowUpRight />
      </Link>
      <Link className="dashboard-link" href="/create-items">
        Create Items <BsArrowUpRight />
      </Link>
      <Link className="dashboard-link" href="/delete-items">
        Delete Items <BsArrowUpRight />
      </Link>
    </main>
  );
}
