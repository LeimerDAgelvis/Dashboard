import React, { useEffect, useState } from "react";

function Usuarios() {
    const [Usuarios, setUsuarios] = useState([])

    useEffect( () => {
        fetch('/api/users')
        .then(response => response.json())
        .then(data => setUsuarios(data.data))
    }, [])

    return (
        <div className="card shadow position-top-box">
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Usuarios.map((elemento,i) => 
                        <tr key={i}>
                            <td>{elemento.id}</td>
                            <td>{elemento.fullName}</td> 
                            <td>{elemento.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>  
        </div>
    )
}

export default Usuarios