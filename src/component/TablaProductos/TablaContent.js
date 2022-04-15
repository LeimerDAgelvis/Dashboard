import { useState, useEffect } from "react";
import React from 'react'
import TablaRow from "./TablaRow";


//const dataProductos = [GabineteAT, TecladoGenius, MouseLogitech, MonitorSamsung, LaptopLenovo, MotherboardASUS];

function TablaContent(){  
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            //console.log(data.data)
            setProductos(data.data);
        })
        .catch(err => console.log(err))

    },[])// se monta el componente por primera vez
    return (
        <React.Fragment>
            {
                productos.map((producto)=>{ // map iterra en cada elemnto y 
                    return (//y devuelve dicho array y lo imprime en cada fila de la tabla por su id
                        <TablaRow product={producto} key={producto.id} />                      
                        )
                })
            }
        </React.Fragment>
    )
}
export default TablaContent;