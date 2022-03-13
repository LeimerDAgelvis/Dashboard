import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

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
            <form className="productoBox" action={`/products/${Producto.id}?_method=PUT`} method="POST" encType="multipart/form-data" id="formulario">
                <br/>
                <span>Nombre del producto:</span> 
                <br/>
                <input type="text" name= "title" className="input-producto" value={Producto.title}/>
                <br/>
                <span>Descripcion del producto:</span>
                <br/>
                <textarea className="input-producto" rows= "10" cols="50" name= "description" value={Producto.description}></textarea>
                <br/>
                <span>Modelo: </span>
                <br/>
                <input type="text" name="model" className="input-producto" value={Producto.model}/>                                                  
                <br/>
                <span>Imagen:</span>
                <br/>
                <div><img src={`/img/productos/${Producto.img}`} alt={Producto.title}/></div>
                <input className="img" type="file" name= "img" />
                <br/>
                {/* <span>Categoria:</span>
                <br/>
                <div className="categorias">
                    <input type='radio' id='radio' value='Motherboard'/>
                    <label for="Motherboard"> Motherboard</label>
                    <br/>
                    <input type='radio' id='radio' value='Procesador'/>
                    <label for="Procesador"> Procesador</label>
                    <br/>
                    <input type='radio' id='radio' value='Placas de video'/>
                    <label for="Placas de video"> Placas de video</label>
                    <br/>
                    <input type='radio' id='radio' value='Memorias RAM'/>
                    <label for="Memorias RAM"> Memorias RAM</label>
                    <br/>
                    <input type='radio' id='radio' value='Almacenamiento'/>
                    <label for="Almacenamiento"> Almacenamiento</label>
                    <br/>
                    <input type='radio' id='radio' value='Otros'/>
                    <label for="Otros"> Otros</label>
                </div> */}
                {/* <div>
                    <span>Descuento: </span>
                    <br/>
                    <select>
                        <option value='1'>Si</option>
                        <option value='2'>No</option>
                    </select>
                    <input type="text" name="discount" class="input-producto" value={Producto.discount}/>
                </div> */}
                <br/>
                <span>Precio: </span>
                <br/>
                <input type="text" name="price" className="input-producto" value={Producto.price}/>                                                  
                <br/>
                <div className="botones-div"> 
                    <button type="submit" className="boton-agregar">Guardar</button>
                </div>
            </form>
            <form className="productoBox" action={`/products/${Producto.id}?_method=DELETE`} method="POST" encType="multipart/form-data" id="formulario">
                <button className="boton-eliminar">Eliminar</button>
            </form>
        </div>
    )
}
export default ProductoDetail;