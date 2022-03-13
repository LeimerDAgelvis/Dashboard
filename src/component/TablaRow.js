import React from "react";


function TablaRow(props){
    console.log('row', props);
    
    
    return (
        <React.Fragment>
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <td>stock</td>
            <td>ventas</td>
        </tr>
        </React.Fragment>
    )
}
export default TablaRow;