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

const BaseProps = [Usuarios,Categorias,Productos];


function ContenTop(){
    return (
        <React.Fragment>
        {/*<!-- ContenTop -->*/}
        <div className="row">
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