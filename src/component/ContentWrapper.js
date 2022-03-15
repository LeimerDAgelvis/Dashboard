import React from "react";
import Usuarios from './TablaUsuarios/Usuarios' 
import Categorias from './Categorias'
import Tabla from "./TablaProductos/Tabla";


function ContentWrapper() {
    return (
        <div>
            <div className="wrapper">
                <Usuarios />
                <Categorias />
            </div>
            <Tabla tituloTabla="Productos" />
        </div>
    )
}

export default ContentWrapper