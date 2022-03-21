import React from 'react';
import Topbar from './Topbar';
import ContentWrapper from './ContentWrapper'
/* import Enrutador from './Enrutador'; */
import Footer from './Footer';

function DashboardMain(){
    return (
        <React.Fragment>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />  
                    <ContentWrapper />                    
                    {/* <Enrutador /> */}
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default DashboardMain;