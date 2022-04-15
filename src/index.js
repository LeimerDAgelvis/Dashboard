import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';// archivo de medición de desempeño.
import Enrutador from './component/Enrutador';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Enrutador /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')// acceder al nodo por su atributo id que es 'root' en el body del index.html.
);
// Enrutador tiene el resto de los componentes.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
