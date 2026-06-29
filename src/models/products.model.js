const products = [
  {
    id: 1,
    name: "Zapatillas Running",
    price: 150,
    categories: ["Calzado", "Deportes"]
  },
  {
    id: 2,
    name: "Remera Deportiva",
    price: 45,
    categories: ["Ropa", "Deportes"]
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    price: 120,
    categories: ["Electrónica", "Audio"]
  },
  {
    id: 4,
    name: "Mochila Urbana",
    price: 80,
    categories: ["Accesorios", "Viajes"]
  },
  {
    id: 5,
    name: "Mouse Gamer",
    price: 65,
    categories: ["Electrónica", "Gaming"]
  },
  {
    id: 6,
    name: "Silla Ergonómica",
    price: 320,
    categories: ["Hogar", "Oficina"]
  },
  {
    id: 7,
    name: "Botella Térmica",
    price: 35,
    categories: ["Hogar", "Deportes"]
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 250,
    categories: ["Electrónica", "Wearables"]
  },
  {
    id: 9,
    name: "Campera Impermeable",
    price: 180,
    categories: ["Ropa", "Outdoor"]
  },
  {
    id: 10,
    name: "Pelota de Fútbol",
    price: 40,
    categories: ["Deportes", "Accesorios"]
  }
];

export const getAllProducts = () => {
    return products;
};

export const getProductById = (id) => {
    return products.find( item => item.id == id );
};