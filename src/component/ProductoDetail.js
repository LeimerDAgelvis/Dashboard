import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

function ProductoDetail(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams()

    useEffect( () => {
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProducto(data))
    }, [])

    return (
        <div className="card shadow position-top-box">
            <h3>{Producto.title}</h3>
            <br/>
            <span>Descripcion del producto: </span>
            <br/>
            <div>{Producto.description}</div>
            <br/>
            <span>Modelo: </span>
            <br/>
            <div>{Producto.model}</div>                                              
            <br/>
            <span>Imagen: </span>
            <br/>
            <div><img src={`/img/productos/${Producto.img}`} alt={Producto.title}/></div>
            <br/>
            <span>Categoria: {Producto.product_type}</span>
            <br/>
            <span>Descuento: {Producto.discount}</span>
            <br/>
            <span>Precio: {Producto.price}</span>                                                        
            <br/>
            <div className="botones-div"> 
                <button className="boton boton-editar"><Link to={`/products/edit/${id}`}>Editar</Link></button>
            </div>
        </div>
    )
}
export default ProductoDetail;