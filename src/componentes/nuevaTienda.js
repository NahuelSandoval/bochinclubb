import React from 'react'
import { useState } from 'react';
import Header from './TiendaNueva/Header'
import ProductList from './TiendaNueva/ProductList'
import "./estilos/index.css"

function TiendaNueva() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
      {/* le paso como props todos los estados del componente padre (TiendaNueva) a sus hijos, (producList y Header)*/}
      <Header allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts} />
      <ProductList allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts} />
      <h1>Gracias por su colaboración</h1>
    </>
  )
}

export default TiendaNueva