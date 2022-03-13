import React from 'react';
import ContenTop from './ContenTop';
import Footer from './Footer';
import Topbar from './Topbar';

function Header(){
    return (
        <React.Fragment>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Topbar/>
            <ContenTop/>
            </div>
            <Footer/>
        </div>
        </React.Fragment>
    )
}
export default Header;