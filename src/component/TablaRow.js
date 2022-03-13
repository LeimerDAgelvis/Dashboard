import React from "react";


function TablaRow(props){
    console.log('row', props);
    return (
        <React.Fragment>
        <tr>
            <td>{props.nombre}</td>
            <td>{props.precio}</td>
            <td>{props.stock}</td>
            <td>{props.vendidos}</td>
        </tr>
        </React.Fragment>
    )
}
export default TablaRow;