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
    name: "Hamburgesas",
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

  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Cerveza",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Litros de Cerveza",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Mixologia",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6445a",
    name: "Botellas",
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
    item: "Tablón de carnes",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$237.00" }],
    image: "/tostada.jpg",
    description:
      "Jamon serrano, salami curado, jamon de pavo, focaccia, aceitunas negras, aceitunas verdes, arandanos y fruta de temporada",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c71",
    item: "Tablón de quesos",
    category: categories[0].name,
    sizes: [{ name: "", prize: "$187.00" }],
    image: "/caldo2.jpg",
    description:
      "Queso panela, de cabra o manchego, focaccia, aceitunas negras, aceitunas verdes, arandanos y fruta de temporada",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c72",
    item: "Tablón mixto",
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
  }, //-----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Margarita",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$209.00" }],
    image: "/chocolatecake.jpg",
    description: "Albaca, tomate, cherry y queso mozarella",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Pepperoni",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$209.00" }],
    image: "/bread.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Hawaiana",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$209.00" }],
    image: "/chocolatecake.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Carnes frias",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$209.00" }],
    image: "/bread.jpg",
    description: "Carnes frias, jamon, pepperoni, salchicha y tocino",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Jamon serrano",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$239.00" }],
    image: "/chocolatecake.jpg",
    description: "Queso mozarella, jamon serrano",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Salmon",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$239.00" }],
    image: "/bread.jpg",
    description: "Con alcaparras horneadas, espinacas y queso de cabra",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Arrachera",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$249.00" }],
    image: "/chocolatecake.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Arma tu pizza",
    category: categories[2].name,
    sizes: [{ name: "", prize: "$209.00" }],
    image: "/bread.jpg",
    description:
      "Cuatro ingredientes. Pregunta a tu mesero(a) por mas ingredientes",
    available: "available",
  }, //----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Parrillada especial",
    category: categories[3].name,
    sizes: [{ name: "", prize: "$649.00" }],
    image: "/bread.jpg",
    description: "(850 gr de carne con guarnicion)",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Rib eye",
    category: categories[3].name,
    sizes: [{ name: "", prize: "$269.00" }],
    image: "/chocolatecake.jpg",
    description: "De 270 a 350gr de carne y guarnicion",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Picaña",
    category: categories[3].name,
    sizes: [{ name: "", prize: "$249.00" }],
    image: "/bread.jpg",
    description: "De 270 a 350gr de carne y guarnicion",
    available: "available",
  }, //---------
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Sencilla de res",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$129.00" }],
    image: "/chocolatecake.jpg",
    description: "Con lechuga, jitomate, queso manchego y cebolla",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Doble de res",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description:
      "Doble carne de res con lechuga, jitomate, queso manchego y cebolla",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Pollo crunch",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$129.00" }],
    image: "/chocolatecake.jpg",
    description:
      "Con pepino, cebolla morada, lechuga y el exquisito y crujiemnte sabor del pollo",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Salmon",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$239.00" }],
    image: "/bread.jpg",
    description: "De salmon con pan artesanal",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c78",
    item: "Portobello y tocino",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$189.00" }],
    image: "/chocolatecake.jpg",
    description: "Con pan artesanal acompañada de ensalada",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Arrachera",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$179.00" }],
    image: "/bread.jpg",
    description: "Con guacamole y acompañada de papas a la francesa",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Hawaina",
    category: categories[4].name,
    sizes: [{ name: "", prize: "$149.00" }],
    image: "/bread.jpg",
    description: "Con tocino, queso oaxaca,amon y piña",
    available: "available",
  }, //----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Chilly dog",
    category: categories[5].name,
    sizes: [{ name: "", prize: "$117.00" }],
    image: "/bread.jpg",
    description:
      "Hot dog con queso americano liquido, cebolla, jitomate, habanero y bistec",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Treadicional",
    category: categories[5].name,
    sizes: [{ name: "", prize: "$89.00" }],
    image: "/bread.jpg",
    description: "Jot dog con salchicha jumbo",
    available: "available",
  }, //-----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Adobadas",
    category: categories[6].name,
    sizes: [{ name: "", prize: "$129.00" }],
    image: "/bread.jpg",
    description: "7-8 piezas acompanadas de apio y zanahoria",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "BBQ",
    category: categories[6].name,
    sizes: [{ name: "", prize: "$139.00" }],
    image: "/bread.jpg",
    description: "7-8 piezas",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mango habanero",
    category: categories[6].name,
    sizes: [{ name: "", prize: "$139.00" }],
    image: "/bread.jpg",
    description: "7-8 piezas",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Bufalo",
    category: categories[6].name,
    sizes: [{ name: "", prize: "$139.00" }],
    image: "/bread.jpg",
    description: "7-8 piezas",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Lemon pepper",
    category: categories[6].name,
    sizes: [{ name: "", prize: "$139.00" }],
    image: "/bread.jpg",
    description: "7-8 piezas",
    available: "available",
  }, //---------
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Hot mango habanero",
    category: categories[7].name,
    sizes: [{ name: "", prize: "$149.00" }],
    image: "/bread.jpg",
    description: "Acompanadas con apio y zanahoria",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "BBQ",
    category: categories[7].name,
    sizes: [{ name: "", prize: "$149.00" }],
    image: "/bread.jpg",
    description: "Acompanadas con apio y zanahoria",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Bufalo",
    category: categories[7].name,
    sizes: [{ name: "", prize: "$149.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  }, //-------
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Ensalada de arugula",
    category: categories[8].name,
    sizes: [{ name: "", prize: "$119.00" }],
    image: "/bread.jpg",
    description: "Mezcla de arugula, lechugas, tomate cherry, queso de cabra y betabel encurtido",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Ensalada del dia",
    category: categories[8].name,
    sizes: [{ name: "", prize: "$89.00" }],
    image: "/bread.jpg",
    description: "Deliciosa seleccion de lechugas del dia",
    available: "available",
  },//--------
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Oreo frito con helado",
    category: categories[9].name,
    sizes: [{ name: "", prize: "$119.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Afogato con whisky",
    category: categories[9].name,
    sizes: [{ name: "", prize: "$117.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Copa de helado",
    category: categories[9].name,
    sizes: [{ name: "", prize: "$67.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Brownie de chocolate helado",
    category: categories[9].name,
    sizes: [{ name: "", prize: "$119.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  }, //--- 15
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Agua embotellada",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$27.00" }],
    image: "/bread.jpg",
    description: "500ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Agua de frutas",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$89.00" }],
    image: "/bread.jpg",
    description: "1.750ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Refresco",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$39.00" }],
    image: "/bread.jpg",
    description: "355ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Agua mineral",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$38.00" }],
    image: "/bread.jpg",
    description: "355ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Agua tonica",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$28.00" }],
    image: "/bread.jpg",
    description: "355ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Perrier",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "300ml",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Boost",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$59.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Vaso jugo",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$28.00" }],
    image: "/bread.jpg",
    description: "Arandano, mango, naranja",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Limonada / Naranjada",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$38.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Jarra de narajdada / limonada",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$117.00" }],
    image: "/bread.jpg",
    description: "Jarra 1.5L",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Cafe de olla",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$39.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Malteada",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$80.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Pina colada s/a",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$70.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mojito s/a",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$67.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita s/a",
    category: categories[10].name,
    sizes: [{ name: "", prize: "$67.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },//----
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Chilaquiles",
    category: categories[11].name,
    sizes: [{ name: "", prize: "$129.00" }],
    image: "/bread.jpg",
    description: "Salsa roja o verde",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Enchiladas",
    category: categories[11].name,
    sizes: [{ name: "", prize: "$127.00" }],
    image: "/bread.jpg",
    description: "Salsa verde o roja",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Tacos de cochinita",
    category: categories[11].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/bread.jpg",
    description: "Orden de tres",
    available: "available",
  },
//  CERVEZASSSS
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Indio",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$47.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Tecate",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$47.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "XX Lager",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "XX Ambar",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Heineken 0.0",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Heineken",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$65.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Bohemia",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "Clara/Oscura",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Amstel Ultra",
    category: categories[12].name,
    sizes: [{ name: "", prize: "$49.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
//LITROSSSSSSSSS
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Clara",
    category: categories[13].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/bread.jpg",
    description: "Tecate",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Oscura",
    category: categories[13].name,
    sizes: [{ name: "", prize: "$99.00" }],
    image: "/bread.jpg",
    description: "Indio",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Clara con Clamato",
    category: categories[13].name,
    sizes: [{ name: "", prize: "$90.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Oscura con Clamato",
    category: categories[13].name,
    sizes: [{ name: "", prize: "$90.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
//MIXOLOGIAAAAA
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita Limon",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita Frutos Rojos",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita Mango",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita Tamarindo",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Margarita Jamaica",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mojito Tradicional",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mojito Frutos Rojos",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mojito Mango",
    category: categories[14].name,
    sizes: [{ name: "", prize: "$169.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
//BOTELLLLASSSSS
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Bacardi blanco",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$849.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Capitan Morgan",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$700.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Malibu",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$700.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "400 Conejos",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1299.00" }],
    image: "/bread.jpg",
    description: "Joven",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Mezcal Don Bicho",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1099.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Don Julio 70",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1999.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Maestro",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1499.00" }],
    image: "/bread.jpg",
    description: "Dobel diamante",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Jhonny Walker N.",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1799.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Buchanan's",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1799.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Jack Daniels",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$1160.00" }],
    image: "/bread.jpg", 
    description: "",
    available: "available",
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "Smirnoff",
    category: categories[15].name,
    sizes: [{ name: "", prize: "$699.00" }],
    image: "/bread.jpg",
    description: "",
    available: "available",
  },
  //-----
  /*{
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c79",
    item: "",
    category: categories[11].name,
    sizes: [{ name: "", prize: "$.00" }],
    image: "/bread.jpg",
    description: "",
    available: "unavailable",
  },*/
];

module.exports = {
  dishes,
  categories,
};
