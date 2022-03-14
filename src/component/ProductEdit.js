import React, {useState, useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";


function ProductoEdit(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect( () => {
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setProducto(data)})
    }, []);

    const title = useRef()
    const description = useRef();
    const model = useRef();
    const img = useRef();
    const price = useRef();

    function postToBackEnd (e) {
        e.preventDefault();
        fetch(`/api/products/edit/${Producto.id}?_method=PUT`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({
                title:title.current.value,
                description:description.current.value,
                model:model.current.value,
                img:img.current.value,
                price:price.current.value
            })
        })
        .then(navigate('/'));
        
    }

    return (
        
        <div className="card shadow position-top-box">
            <h3>{Producto.title}</h3>
            <br/>
            <form className="productoBox" action={`/api/products/edit/${Producto.id}?_method=PUT`} method="POST" encType="multipart/form-data" id="formulario" onSubmit={postToBackEnd}>
                <span>Nombre del producto: </span> 
                <br/>
                <input type="text" name= "title" className="input-producto" placeholder={Producto.title} ref={title}/>
                <br/>
                <span>Descripcion del producto: </span>
                <br/>
                <textarea className="input-producto" rows= "10" cols="50" name= "description" placeholder={Producto.description} ref={description}></textarea>
                <br/>
                <span>Modelo: </span>
                <br/>
                <input type="text" name="model" className="input-producto" placeholder={Producto.model} ref={model}/>                                                  
                <br/>
                <span>Imagen: </span>
                <br/>
                <div><img src={`/img/productos/${Producto.img}`} alt={Producto.title}/></div>
                <input className="img" type="file" name= "img" ref={img} />
                <br/>
                <span>Categoria:</span>
                <br/>
                <div className="categorias">
                    <input type='radio' id='radio' placeholder='Motherboard'/>
                    <label for="Motherboard"> Motherboard</label>
                    <br/>
                    <input type='radio' id='radio' placeholder='Procesador'/>
                    <label for="Procesador"> Procesador</label>
                    <br/>
                    <input type='radio' id='radio' placeholder='Placas de video'/>
                    <label for="Placas de video"> Placas de video</label>
                    <br/>
                    <input type='radio' id='radio' placeholder='Memorias RAM'/>
                    <label for="Memorias RAM"> Memorias RAM</label>
                    <br/>
                    <input type='radio' id='radio' placeholder='Almacenamiento'/>
                    <label for="Almacenamiento"> Almacenamiento</label>
                    <br/>
                    <input type='radio' id='radio' placeholder='Otros'/>
                    <label for="Otros"> Otros</label>
                </div>
                {/* <div>
                    <span>Descuento: </span>
                    <br/>
                    <select>
                        <option placeholder='1'>Si</option>
                        <option placeholder='2'>No</option>
                    </select>
                    <input type="text" name="discount" class="input-producto" placeholder={Producto.discount}/>
                </div> */}
                <br/>
                <span>Precio: </span>
                <br/>
                <input type="text" name="price" className="input-producto" placeholder={Producto.price} ref={price}/>                                                  
                <br/>
                <div className="botones-div"> 
                    <button type="submit" className="boton boton-editar">Guardar</button>
                </div>
            </form>
            <form className="productoBox" action={`/products/${Producto.id}?_method=DELETE`} method="POST" encType="multipart/form-data" id="formulario">
                <button className="boton boton-eliminar">Eliminar</button>
            </form>
        </div>
    )
}
export default ProductoEdit;