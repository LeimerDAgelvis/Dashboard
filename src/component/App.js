import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <Sidebar />
          <Footer />
        </div>
    </React.Fragment>
  );
}

export default App;

