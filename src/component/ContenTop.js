import React from "react";
import ContentTotales from './ContentTotales'
import {useState, useEffect } from 'react'

function ContenTop(){

    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])

    useEffect( () => {

        fetch('/api/users')
        .then(response => response.json())
        .then(data => setUsuarios(data))

        fetch('/api/products')
        .then(response => response.json())
        .then(data => setProductos(data))

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
        </div>
        </React.Fragment>
    )
}
export default ContenTop;