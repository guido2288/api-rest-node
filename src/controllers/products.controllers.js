import * as Model from "../models/products.model.js";

export const getAllProducts = (req, res) => {

    const { category } = req.query;

    const products = Model.getAllProducts();

    if(category){
      const productsFiltered = products.filter(item => (
        item.categories.includes(category)
      ));

      return res.json(productsFiltered);
    }

    res.json(products);

};

export const searhProducts = (req, res) => {
  const { name } = req.query;

  const products = Model.getAllProducts();

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

  const product = Model.getProductById(id);

  if(!product){
    res.status(400).json({error: `No existe producto con el id ${id}` });
  }

  res.json(product);
};