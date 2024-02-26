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

import { Kalnia } from "next/font/google";
import Link from "next/link";
const kalnia = Kalnia({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const data = [
    {
      name: "Mariscos",
      items: [
        {
          item: "Empanada de camarón",
          sizes: [{ name: "", prize: "65.00" }],
          image: "/camaron.jpg",
          description:
            "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate",
        },

        {
          item: "Aguachile",
          sizes: [{ name: "", prize: "65.00" }],
          image: "/aguachile.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          item: "Coctel",
          sizes: [{ name: "", prize: "65.00" }],
          image: "/coctel.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Filete de pescado",
          sizes: [{ name: "", prize: "65.00" }],
          image: "/filete2.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },

        {
          item: "Tostada de camarón",
          sizes: [{ name: "", prize: "10.00" }],
          image: "/tostada.jpg",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          item: "Caldo de camarón",
          sizes: [{ name: "", prize: "65.00" }],
          image: "/caldo2.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
    {
      name: "Bebidas",
      items: [
        {
          item: "Agua fresca (500ml)",
          sizes: [
            { name: "Vaso", prize: "20.00" },
            { name: "Jarra", prize: "30.00" },
          ],
          image: "/water.jpg",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          item: "Refresco (600ml)",
          sizes: [{ name: "", prize: "20.00" }],
          image: "/coke.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Café",
          sizes: [{ name: "", prize: "15.00" }],
          image: "/coffee.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          item: "Té",
          sizes: [{ name: "", prize: "10.00" }],
          image: "/tea.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
    // category
    {
      name: "Pozole",
      items: [
        {
          item: "Pozole grande",
          sizes: [
            { name: "Grande", prize: "20.00" },
            { name: "Chigo", prize: "70.00" },
          ],
          image: "/pozole.jpg",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
      ],
    },
    {
      name: "Postres",
      items: [
        {
          item: "Pay de queso",
          sizes: [{ name: "", prize: "20.00" }],
          image: "/cheesecake.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Pastel de chocolate",
          sizes: [{ name: "", prize: "20.00" }],
          image: "/chocolatecake.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Pan de dulce",
          sizes: [{ name: "", prize: "10.00" }],
          image: "/bread.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
  ];

  console.log(data);

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
          {data.map((category, index) => (
            <a key={index} href={`#${category.name}`}>
              {category.name}
            </a>
          ))}
        </div>
        <div className="lists">
          <List title={data[0].name} category={data[0].items} />
          <List title={data[1].name} category={data[1].items} />
          <List title={data[2].name} category={data[2].items} />
          <List title={data[3].name} category={data[3].items} />
        </div>
      </>
    </main>
  );
}
