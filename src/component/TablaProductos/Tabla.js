import React from "react";
import {Link} from 'react-router-dom'
import TablaContent from "./TablaContent";

function Tabla({tituloTabla}){
    return (
        <React.Fragment>
            <div className="card shadow position-top-box fit">
            {/*<!-- ContenTop -->*/}
            <h3>{tituloTabla}</h3>
            <button className="btn btn-warning btn-sm boton-agregar"><Link to='/products/crear'>Crear</Link></button>
            <table className="table">
                <thead>
                <tr> {/*<!--tr: fila de la tabla-->*/}
                    <th scope="col">Producto</th>{/*<!-- th : cabecera de la tabla-->*/}
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