import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Dish from "./Dish";
import List from "./List";

const dmserifdisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const playfairdisplay = Playfair_Display({
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
          cost: "65.00",
          image: "/camaron.jpg",
          description:
            "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate",
        },
        {
          item: "Filete de pescado",
          cost: "65.00",
          image: "/filete.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },

        {
          item: "Tostada de camarón",
          cost: "10.00",
          image: "/tostada.jpg",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          item: "Caldo de camarón",
          cost: "65.00",
          image: "/caldo.jpg",
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
          cost: "20.00",
          image: "/water.jpg",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
          item: "Refresco (600ml)",
          cost: "20.00",
          image: "/coke.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Café",
          cost: "15.00",
          image: "/coffee.jpg",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        },
        {
          item: "Té",
          cost: "10.00",
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
          cost: "20.00",
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
          cost: "20.00",
          image: "/cheesecake.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
        {
          item: "Pastel de chocolate",
          cost: "20.00",
          image: "/chocolatecake.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
  ];

  console.log(data);

  return (
    <main>
      <List title={data[0].name} category={data[0].items} />
      <List title={data[1].name} category={data[1].items} />
      <List title={data[2].name} category={data[2].items} />
      <List title={data[3].name} category={data[3].items} />
    </main>
  );
}
