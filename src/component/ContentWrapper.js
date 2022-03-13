import React from "react";
import Usuarios from './Usuarios' 
import Categorias from './Categorias'
import Tabla from "./Tabla";


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