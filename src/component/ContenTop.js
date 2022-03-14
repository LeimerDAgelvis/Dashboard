import React from "react";
import { useState, useEffect } from 'react'
import ContentTotales from './ContentTotales'
import UltimoCreado from './UltimoCreado';

function ContenTop(){

    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [ultimoUsuario, setUltUsuario] = useState(true)
    const [ultimoProducto, setUltProducto] = useState(true)
    

    useEffect( () => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            setUsuarios(data)
            setUltUsuario(false)
        })

        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            setUltProducto(false)
        })

        fetch('/api/categories')
        .then(response => response.json())
        .then(data => setCategorias(data))

    }, [])

    return (
        <React.Fragment>
        {/*<!-- ContenTop -->*/}
        <div className="row padded-h">
            <ContentTotales titulo='Usuarios' total={usuarios.count}/>

            <ContentTotales titulo='Productos' total={productos.count}/>

            <ContentTotales titulo='Categorias' total={categorias.count}/>    

            {
                ultimoUsuario ? <span>CARGANDO</span> : <UltimoCreado titulo='Usuario' ultimo={usuarios.data.slice(-1)[0].email}/>
            }
            {               
                ultimoProducto ? <span>CARGANDO</span> : <UltimoCreado titulo='Producto' ultimo={productos.data.slice(-1)[0].title}/>
            }
        </div>
        </React.Fragment>
    )
}
export default ContenTop;