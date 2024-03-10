import Image from "next/image";
import { Roboto } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import List from "./List";
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

export default async function Home() {
  const dishes = await fetchDishes();

  const categories = await fetchCategories();

  return (
    <main className={nunito.className}>
      <div className="banner">
        <h1 className={kalnia.className}>Cocina La Antigua</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <Link
          className="maps_location"
          href={"https://maps.app.goo.gl/zVqB5uGK3w6hRzBe9"}
        >
          La antigua, Tultepec, Estado de Mexico <VscLinkExternal />
        </Link>
        <div className="bannerimage">
          <Image
            alt={"restaurant"}
            src={"/bannerimage.jpg"}
            width={400}
            height={200}
          />
        </div>
      </div>

      <>
        <div className="cats_nav">
          {categories.map((category, index) => (
            <a key={index} href={`#${category.name}`}>
              {category.name}
            </a>
          ))}
        </div>
        <div className="lists">
        {categories.map((category, index) => (
            <List key={index} title={category.name} category={dishes} />
          ))}
          
        </div>
      </>
    </main>
  );
}
