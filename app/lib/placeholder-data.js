const categories = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Mariscos",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6443a",
    name: "Pozole",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6444a",
    name: "Bebidas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Postres",
  },
];
const dishes = [
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    item: "Empanada de camarón",
    category: categories[0].name,
    sizes: [{ name: "", prize: "65.00" }],
    image: "/camaron.jpg",
    description:
      "Crujiente. rellena de exquisito camaron, jitomate, cilantro y cebolla. Acompanada con arroz y aguacate",
  },

  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c67",
    item: "Aguachile",
    category: categories[0].name,
    sizes: [{ name: "", prize: "65.00" }],
    image: "/aguachile.jpg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c68",
    item: "Coctel",
    category: categories[0].name,
    sizes: [{ name: "", prize: "65.00" }],
    image: "/coctel.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c69",
    item: "Filete de pescado",
    category: categories[0].name,
    sizes: [{ name: "", prize: "65.00" }],
    image: "/filete2.jpg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },

  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c70",
    item: "Tostada de camarón",
    category: categories[0].name,
    sizes: [{ name: "", prize: "10.00" }],
    image: "/tostada.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c71",
    item: "Caldo de camarón",
    category: categories[0].name,
    sizes: [{ name: "", prize: "65.00" }],
    image: "/caldo2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c72",
    item: "Agua fresca (500ml)",
    category: categories[2].name,
    sizes: [
      { name: "Vaso", prize: "20.00" },
      { name: "Jarra", prize: "30.00" },
    ],
    image: "/water.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c73",
    item: "Refresco (600ml)",
    category: categories[2].name,
    sizes: [{ name: "", prize: "20.00" }],
    image: "/coke.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c74",
    item: "Café",
    category: categories[2].name,
    sizes: [{ name: "", prize: "15.00" }],
    image: "/coffee.jpg",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c75",
    item: "Té",
    category: categories[2].name,
    sizes: [{ name: "", prize: "10.00" }],
    image: "/tea.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c76",
    item: "Pozole",
    category: categories[1].name,
    sizes: [
      { name: "Grande", prize: "20.00" },
      { name: "Chico", prize: "70.00" },
    ],
    image: "/pozole.jpg",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c77",
    item: "Pay de queso",
    category: categories[3].name,
    sizes: [{ name: "", prize: "20.00" }],
    image: "/cheesecake2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Pastel de chocolate",
    category: categories[3].name,
    sizes: [{ name: "", prize: "20.00" }],
    image: "/chocolatecake.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Pan de dulce",
    category: categories[3].name ,
    sizes: [{ name: "", prize: "10.00" }],
    image: "/bread.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

module.exports = {
  dishes,
  categories,
};