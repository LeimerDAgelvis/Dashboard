import React from "react";
import TablaContent from "./TablaContent";

function Tabla({tituloTabla}){
    return (
        <React.Fragment>
            <div className="card shadow position-top-box">
        {/*<!-- ContenTop -->*/}
        <h3>{tituloTabla}</h3>
        <table className="table">
        <thead>
        <tr>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Detalle</th>
        </tr>
        </thead>
        <tbody>
            <TablaContent />
        </tbody>    
        </table>
        </div>
        </React.Fragment>
    )
}
export default Tabla;