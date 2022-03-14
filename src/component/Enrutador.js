import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import Tabla from './Tabla'
import Usuarios from './Usuarios'
import Categorias from './Categorias'
import ProductoDetail from './ProductoDetail'
import ProductoCreate from './ProductoCreate'
import ProductoEdit from './ProductEdit'
function Enrutador () {
    return (
        <Routes>
            <Route path='/' element={<ContentWrapper/>}/>
            <Route path='/usuarios' element={<Usuarios/>}/>
            <Route path='/products' element={<Tabla/>}/>
            <Route path='/categorias' element={<Categorias/>}/>
            <Route path='/products/:id' element={<ProductoDetail/>}/>
            <Route path='/products/edit/:id' element={<ProductoEdit/>}/>
            <Route path='/products/crear' element={<ProductoCreate/>}/>
        </Routes>
    )
}

export default Enrutador