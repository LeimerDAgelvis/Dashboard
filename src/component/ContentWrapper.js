import React from "react";
import Usuarios from './TablaUsuarios/Usuarios' 
import Categorias from './Categorias'
import Tabla from "./TablaProductos/Tabla";
import ContenTop from './ContenTop';


function ContentWrapper() {
    return (
        <div>
            <ContenTop/> 
            <div className="wrapper">
                <Usuarios />
                <Categorias />
            </div>
            <Tabla tituloTabla="Productos" />
        </div>
    )
}

export default ContentWrapper