import React from 'react';
import Topbar from './Topbar';
import ContenTop from './ContenTop';
import Enrutador from './Enrutador';
import Footer from './Footer';

function DashboardMain(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />
                    <ContenTop/>   
                    <Enrutador />
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default DashboardMain;