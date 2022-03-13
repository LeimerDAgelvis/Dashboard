import React from 'react';
import Sidebar from './Sidebar';
import DashboardMain from './Dashboard';
import "../assets/css/app.css";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <div id="wrapper">
            <Sidebar />
            <DashboardMain />
          </div>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

