import React from "react";
import TablaRow from "./TablaRow";

let GabineteAT = {
    id: 1, 
    nombre: "Gabinete AT",
    precio: 3889,
    stock: 12,
    vendidos: 2
}

let TecladoGenius = {
    id: 2, 
    nombre: "Teclado Genius",
    precio: 689,
    stock: 50,
    vendidos: 12
}

let MouseLogitech = {
    id: 3, 
    nombre: "Mouse Logitech",
    precio: 2544,
    stock: 88,
    vendidos: 25
}

let MonitorSamsung = {
    id: 4, 
    nombre: "Monitor Samsung 29 pulgadas",
    precio: 23222,
    stock: 3,
    vendidos: 1
}

let LaptopLenovo= {
    id: 5, 
    nombre: "Laptop Lenovo Thinkpad I9",
    precio: 355447,
    stock: 2,
    vendidos: 0
}

let MotherboardASUS = {
    id: 1, 
    nombre: "Motherboard ASUS Gaming",
    precio: 13349,
    stock: 12,
    vendidos: 2
}

const dataProductos = [GabineteAT, TecladoGenius, MouseLogitech, MonitorSamsung, LaptopLenovo, MotherboardASUS];


function TablaContent(){
    return (
        <React.Fragment>
            {
                dataProductos.map((data,index)=>{
                    return (
                        <TablaRow {...data} key={data.id} />                      
                        )
                })
            }
        </React.Fragment>
    )
}
export default TablaContent;