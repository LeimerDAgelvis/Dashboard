import React, { useEffect, useState } from "react";
import UsuariosRow from "./UsuariosRow"

function Usuarios() {
    const [Usuarios, setUsuarios] = useState([]);
    const [Categorias, setCategorias] = useState([]);

    async function fetchData () {

        let users = await fetch('/api/users').then(response => response.json());
        let categories = await fetch('/api/userCategories').then(response => response.json());
        setUsuarios(users.data)
        setCategorias(categories.data)
        
    }
    useEffect( () => {
       
        fetchData();

    }, []);


    return (
        <div className="card shadow position-top-box fit">
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Cambiar tipo</th>
                        <th scope="col">Enviar cambio</th>
                        <th scope="col">Eliminar usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {Usuarios.map((elemento,i) => {
                        return(
                        <UsuariosRow usuario={elemento} key={elemento.id} categorias={Categorias}/>
                        )}
                    )}
                </tbody>
            </table>  
        </div>
    )
}

export default Usuarios;