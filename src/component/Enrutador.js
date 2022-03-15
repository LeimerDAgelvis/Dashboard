import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import Tabla from './TablaProductos/Tabla'
import Usuarios from './TablaUsuarios/Usuarios'
import Categorias from './Categorias'
import ProductoDetail from './DetalleProductos/ProductoDetail'
import ProductoCreate from './DetalleProductos/ProductoCreate'
import ProductoEdit from './DetalleProductos/ProductEdit'
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