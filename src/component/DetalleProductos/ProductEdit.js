import React, {useState, useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";


function ProductoEdit(){

    const [Producto, setProducto] = useState({})

    let { id } = useParams();
    let navigate = useNavigate();

    const title = useRef()
    const description = useRef();
    const model = useRef();
    const img = useRef();
    const price = useRef();
  
    useEffect( () => {
        fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
            setProducto(data)
        })
    },[]);

    useEffect (() => {
        //Asigna el valor de cada producto en el input correspondiente, y muestra el input vacío en la primera renderización
            title.current.value = Producto.title === undefined ? "" : Producto.title
            description.current.value = Producto.description === undefined ? "" : Producto.description
            model.current.value = Producto.model === undefined ? "" : Producto.model
            price.current.value = Producto.price === undefined ? "" : Producto.price
    },[Producto]);
    

    function postToBackEnd (e) {// publicar en back-end
        e.preventDefault();
        fetch(`/api/products/edit/${Producto.id}?_method=PUT`,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify({// lo manda por post al back-end y combierte el objeto a un json  mas legible para el ojo humano returnando la actualizacion a la vista
                title:title.current.value, // agarra el valor que es convertido en cadena de texto JSON
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
                <input type="text" name= "title" className="input-producto" ref={title}/>
                <br/>
                <span>Descripcion del producto: </span>
                <br/>
                <textarea className="input-producto" rows= "10" cols="50" name= "description" ref={description}></textarea>
                <br/>
                <span>Modelo: </span>
                <br/>
                <input type="text" name="model" className="input-producto" ref={model}/>                                                  
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
                <input type="text" name="price" className="input-producto" ref={price}/>                                                  
                <br/>
                <div className="botones-div"> 
                    <button type="submit" className="btn btn-primary boton-editar">Guardar</button>
                </div>
            </form>
            <form className="productoBox" action={`/products/${Producto.id}?_method=DELETE`} method="POST" encType="multipart/form-data" id="formulario">
                <button className="btn btn-danger boton-eliminar">Eliminar</button>
            </form>
        </div>
    )
}
export default ProductoEdit;