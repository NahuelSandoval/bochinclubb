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
    <h1>Hola</h1>
    <Header allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}/>
    <ProductList allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}/>
    </>
  )
}

export default TiendaNueva