import React from "react";
import imagen404 from '../assets/images/404.webp';
import { Link } from 'react-router-dom';


function Error404 () {
    return(
        <div style={{'color':'red','textAlign':'center'}}>
            <img alt="Página no encontrada, Error 404" src={imagen404}/>
            <div>
                <Link style={{'textDecoration':'none','color':'blue','textAlign':'center'}} to="/">Regresar al Dashboard</Link>
            </div>
        </div>
    )
};

export default Error404;