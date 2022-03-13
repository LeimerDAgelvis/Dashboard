import React from 'react';
import ContenTop from './ContenTop';
import Footer from './Footer';
import Tabla from './Tabla';
import Topbar from './Topbar';

function DashboardMain(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <ContenTop/>
                    <Tabla tituloTabla="Productos" />
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default DashboardMain;