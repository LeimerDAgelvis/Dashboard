import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import App from './App';
import Tabla from './TablaProductos/Tabla'
import Usuarios from './TablaUsuarios/Usuarios'
import Categorias from './Categorias'
import ProductoDetail from './DetalleProductos/ProductoDetail'
import ProductoCreate from './DetalleProductos/ProductoCreate'
import ProductoEdit from './DetalleProductos/ProductEdit'
import Error404 from './Error404'

function Enrutador () {
    return (
        <Routes>
            <Route exact path='/' element={<App/>} >
                <Route index element={<ContentWrapper />} />
                <Route path='usuarios' element={<Usuarios/>}/>
                <Route path='products' element={<Tabla/>}/>
                <Route path='categorias' element={<Categorias/>}/>
                <Route path='products/:id' element={<ProductoDetail/>}/>
                <Route path='products/edit/:id' element={<ProductoEdit/>}/>
                <Route path='products/crear' element={<ProductoCreate/>}/>
            </Route>
            <Route path='*' element={<Error404/>}/>
        </Routes>
    )
}

export default Enrutador