import React from 'react';
import Sidebar from './Sidebar';
import DashboardMain from './Dashboard';
import "../assets/css/app.css";


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <Sidebar />
          <DashboardMain />
        </div>
    </React.Fragment>
  );
}

export default App;

