import React from 'react'
import "../productos.css"
import BotonCompra from './modal'


const Plantilla = (producto) => {

    
    return <div className="caja">
                <h2>{producto.name}</h2>
                <img src={producto.thumbnail} className="foto" alt={producto.name}/>
                <p className="contPlantilla">precio: ${producto.precio}</p>
                <p className="contPlantilla">producto n°: {producto.id}</p>
                {/* <button onClick={()=>comprar(producto.name)} id = '{producto.name}' className = 'btnCompra'> Comprar </button>  */}
                <BotonCompra name={producto.name}/>
            </div>
}


export default Plantilla