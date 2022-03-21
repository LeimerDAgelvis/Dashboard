import React from 'react';
import Sidebar from './Sidebar';
import "../assets/css/app.css";
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar';
import Footer from './Footer';



function App() {
  return (
    <React.Fragment>
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar />  
                    {/* Outlet llamará a las distintas rutas declaradas dentro de app según el enrutador */}
                    <Outlet />
                </div>
                <Footer/>
            </div>
          </div>

    </React.Fragment>
  );
} 

export default App;

