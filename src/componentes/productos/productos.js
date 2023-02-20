import React, { useState } from 'react'
import Plantilla from './Plantilla/Plantilla';
import "./productos.css";
import buzo from './tienda/buzo.png';
import campera from './tienda/campera.jpg';
import conjunto from './tienda/conjunto.jfif';
import gorro from './tienda/gorro.jfif';
import taza from './tienda/taza.jfif';
import bufanda from './tienda/bufanda.jfif';
import llavero from './tienda/llavero.jfif';
import chomba from './tienda/chomba.jfif'; 

const ProductosEnVenta = () => {

    const [productos] = useState([
        {
            name: 'Buzo',
            precio: 1500,
            id: 1,
            thumbnail: buzo
        },
        {
            name: 'Campera',
            precio: 2200,
            id: 2,
            thumbnail: campera
        },
        {
            name: 'Conjunto',
            precio: 3800,
            id: 3,
            thumbnail: conjunto
        },
        {
            name: 'Gorro',
            precio: 800,
            id: 4,
            thumbnail: gorro
        },
        {
            name: 'Taza',
            precio: 450,
            id: 5,
            thumbnail: taza,
        },
        {
            name: 'Bufanda',
            precio: 800,
            id: 6,
            thumbnail: bufanda,
        },
        {
            name: 'Llavero',
            precio: 300,
            id: 7,
            thumbnail: llavero,
        },
        {
            name: 'Chomba',
            precio: 1500,
            id: 8,
            thumbnail: chomba,
        },
    ]);
    return (
        <main>
            <h2>Tienda de regalos</h2>
            <section id="figuritas">
                {productos.map((producto) => {
                    return (
                        <Plantilla key={producto.id} name={producto.name} thumbnail={producto.thumbnail} precio={producto.precio} id={producto.id} />
                    );
                })}
            </section>
        </main>
    )
}

export default ProductosEnVenta