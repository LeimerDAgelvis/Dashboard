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

    }, [])

    useEffect( () => {
        fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProductos(data)
            setUltProducto(false)
        })

    }, [])

    useEffect( () => {
        fetch('/api/categories')
        .then(response => response.json())
        .then(data => setCategorias(data))
    }, [])
    

    return (
        <React.Fragment>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        {/*<!-- ContenTop -->*/}
        <div className="content-text" >
						<span> Dashboard </span>
					</div>
            <div className="row padded-h">
                <ContentTotales titulo='Usuarios' total={usuarios.count}/>

                <ContentTotales titulo='Productos' total={productos.count}/>

                <ContentTotales titulo='Categorias' total={categorias.count}/>    

                {
                    ultimoUsuario ? <lottie-player src="https://assets3.lottiefiles.com/datafiles/cb81834f3b75c3d2aba9d8a58ad1f408/AE_JSON/loader1.json"  background="transparent"  speed="1"  style={{"width": "300px","height": "300px"}}  loop autoplay></lottie-player> : <UltimoCreado titulo='Usuario' ultimo={usuarios.data.slice(-1)[0].email}/>
                }
                {               
                    ultimoProducto ? <lottie-player src="https://assets3.lottiefiles.com/datafiles/cb81834f3b75c3d2aba9d8a58ad1f408/AE_JSON/loader1.json"  background="transparent"  speed="1"  style={{"width": "300px","height": "300px"}}  loop autoplay></lottie-player> : <UltimoCreado titulo='Producto' ultimo={productos.data.slice(-1)[0].title}/>
                }
            </div>
        </React.Fragment>
    )
}
export default ContenTop;