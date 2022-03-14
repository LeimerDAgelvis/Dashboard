import React from "react";

function ProductoCreate(){

    return (
        <div className="card shadow position-top-box">
            <h3>Crear Producto</h3>
            <form className="productoBox" action='/products/crear' method="POST" encType="multipart/form-data" id="formulario">
                <br/>
                <span>Nombre del producto:</span> 
                <br/>
                <input type="text" name= "title" className="input-producto" />
                <br/>
                <span>Descripcion del producto:</span>
                <br/>
                <textarea className="input-producto" rows= "10" cols="50" name= "description" ></textarea>
                <br/>
                <span>Modelo: </span>
                <br/>
                <input type="text" name="model" className="input-producto" />                                                  
                <br/>
                <span>Imagen:</span>
                <br/>
                <div></div>
                <input className="img" type="file" name= "img" />
                <br/>
                <span>Categoria:</span>
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
                </div>
                <div>
                    <span>Descuento: </span>
                    <br/>
                    <select>
                        <option value='1'>Si</option>
                        <option value='2'>No</option>
                    </select>
                    <input type="text" name="discount" className="input-producto" value='0'/>
                </div>
                <br/>
                <span>Precio: </span>
                <br/>
                <input type="text" name="price" className="input-producto" />                                                  
                <br/>
                <div className="botones-div"> 
                    <button type="submit" className="boton boton-editar">Guardar</button>
                    <button type="reset" className="boton boton-eliminar">Reset</button>
                </div>
            </form>
        </div>
    )
}
export default ProductoCreate;