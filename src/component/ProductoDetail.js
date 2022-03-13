import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function ProductoDetail(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams()

    useEffect( () => {
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProducto(data))
    })
    return (
        <div className="card shadow position-top-box">
            <h3>{Producto.title}</h3>
            <div>
                <img src={`/img/productos/${Producto.img}`} alt={Producto.title}/>
            </div>
        </div>
    )
}
export default ProductoDetail;