import logo from './logo.svg';
import './App.css';

function App() {
  let prueba = fetch('/api/products')
          .then( respuesta => { return respuesta.json() } )
           .then(movie => {
            return movie.data  
           })
         .catch(error => console.log(error))
      
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{prueba
        }
        </div>
      </header>
    </div>
  );
}

export default App;
