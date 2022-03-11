import React from 'react';


function Sidebar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Grupo 7</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menu</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/Total de productos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Total de productos</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/Total de usuarios">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Total de usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/Total de categorias">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Total de categorías</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default Sidebar;
