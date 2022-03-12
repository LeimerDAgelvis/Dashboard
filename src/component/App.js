import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import "../assets/css/app.css";


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <Sidebar />
          <Header />
        </div>
    </React.Fragment>
  );
}

export default App;

