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

export const getAllProducts = (req, res) => {

    const { category } = req.query;

    if(category){
      const productsFiltered = products.filter(item => (
        item.categories.includes(category)
      ));

      return res.json(productsFiltered);
    }

    res.json(products);

}

export const searhProducts = (req, res) => {
  const { name } = req.query;

  if(!name){
    return res.status(400).json({error: `El nombre es requerido`});
  }

  const searchedProducts  = products.filter( item => 
    item.name.toLowerCase().includes(name.toLowerCase()) 
  );

  if(searchedProducts.length == 0){
    return res.status(404).json({ error: `No se encontro ningun producto con el nombre ${name}`})
  }

  res.json(searchedProducts);
};

export const getProductById = (req, res) => {
  const { id } = req.params;

  const product = products.find( item => item.id == id );

  if(!product){
    res.status(400).json({error: `No existe producto con el id ${id}` });
  }

  res.json(product);
}