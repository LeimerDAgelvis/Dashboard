import React from "react";
import { Link } from 'react-router-dom'

function TablaRow(props){
    //console.log('row', props);
    
    return (
        <React.Fragment>
        <tr>{/*<!-- tr: fila y ahi sus celdas td => titulo, precio,stock y Detalle -->*/}
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <td>1</td>
            <td><Link to={`/products/${props.product.id}`}>detalle</Link></td>
            
        </tr>
        </React.Fragment>
    )
}
export default TablaRow;