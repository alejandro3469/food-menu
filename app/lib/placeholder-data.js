const categories = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "Entradas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6443a",
    name: "Tacos",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6444a",
    name: "Pizzas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "A la parrilla",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Hamburquesas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Hot dogs",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Alitas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Costillas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Ensaladas",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Postres",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Bebidas sin alcohol",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Domingos",
  },
];
const dishes = [
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    item: "Papas a la francesa",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$77.00" }],
    image: "/camaron.jpg",
    description: "",
    available: "available",
  },

  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c67",
    item: "Papas en gajo",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$87.00" }],
    image: "/aguachile.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c68",
    item: "Nachos con queso",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$65.00" }],
    image: "/coctel.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c69",
    item: "Nachos con arrachera",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$130.00" }],
    image: "/filete2.jpg",
    description: "",
    available: "available",
  },

  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c70",
    item: "Tablon de carnes",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$237.00" }],
    image: "/tostada.jpg",
    description:
      "Jamon serrano, salami curado, jamon de pavo, focaccia, aceitunas negras, aceitunas verdes, arandanos y fruta de temporada",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c71",
    item: "Tablon de quesos",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$187.00" }],
    image: "/caldo2.jpg",
    description:
      "Queso panela, de cabra o manchego, focaccia, aceitunas negras, aceitunas verdes, arandanos y fruta de temporada",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c72",
    item: "Tablon mixto",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$287.00" }],
    image: "/water.jpg",
    description: "Delicia culinaria que fusiona quesos y carnes frias",
    available: "available",
  }, // -----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c73",
    item: "Arrachera",
    category: categories[1].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/coke.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c74",
    item: "Pollo",
    category: categories[1].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/coffee.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c75",
    item: "Chorizo",
    category: categories[1].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/tea.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c76",
    item: "Bistec",
    category: categories[1].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/pozole.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c77",
    item: "Chistorra",
    category: categories[1].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/cheesecake2.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Pastel de chocolate",
    category: categories[3].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/chocolatecake.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Pan de dulce",
    category: categories[3].name,
    sizes: [{ name: "", prize: "$10.00" }],
    image: "/bread.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    available: "unavailable",
  },
];

module.exports = {
  dishes,
  categories,
};
