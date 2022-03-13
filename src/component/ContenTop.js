import React from "react";
import ContentTotales from './ContentTotales'


let Usuarios = {
    color:   "primary",
    titulo: "Total Usuarios",
    valor: 500,
    icono: "fas fa-film",
}

let Categorias ={
    color:   "success",
    titulo: "Total Categorias",
    valor: 50,
    icono: "fas fa-award",
}

let Productos = {
    color:   "warning",
    titulo: "Total Productos",
    valor: 100,
    icono: "fas fa-user",
}

let UltimoProducto = {
    color:   "primary",
    titulo: "Último producto creado",
    valor: "Motherboard ASUS",
    icono: "fas fa-film",
}

let UltimoUsuario ={
    color:   "success",
    titulo: "Último usuario creado",
    valor: "Mariano Gomez",
    icono: "fas fa-award",
}

let ProductosGabinetes = {
    color:   "warning",
    titulo: "Total de Productos en Gabinetes",
    valor: 12,
    icono: "fas fa-user",
}

const BaseProps = [Usuarios,Categorias,Productos, UltimoProducto, UltimoUsuario, ProductosGabinetes];


function ContenTop(){
    return (
        <React.Fragment>
        {/*<!-- ContenTop -->*/}
        <div className="row padded-h">
            {
                BaseProps.map((Totales,index)=>{
                    return <ContentTotales  {...Totales}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContenTop;