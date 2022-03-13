import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import Tabla from './Tabla'
import Usuarios from './Usuarios'
import Categorias from './Categorias'
import ProductoDetail from './ProductoDetail'
function Enrutador () {
    return (
        <Routes>
            <Route path='/' element={<ContentWrapper/>}/>
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/products' element={<Tabla/>}/>
            <Route path='/categorias' element={<Categorias/>}/>
            <Route path='/products/:id' element={<ProductoDetail/>}/>
        </Routes>
    )
}

export default Enrutador