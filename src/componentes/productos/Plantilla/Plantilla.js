import React from 'react'
import "../productos.css"

const Plantilla = (producto) => {
    const comprar = (nombre) => {
        alert('Acabás de comprar ' + nombre)
    }

    return <div className="caja">
                <h2>{producto.name}</h2>
                <img src={producto.thumbnail} className="foto" alt="producto"/>
                <p className="contPlantilla">precio: ${producto.precio}</p>
                <p className="contPlantilla">producto n°: {producto.id}</p>
                <button onClick={()=>comprar(producto.name)} id = '{producto.name}' className = 'btnCompra'> Comprar </button> 
            </div>
}


export default Plantilla