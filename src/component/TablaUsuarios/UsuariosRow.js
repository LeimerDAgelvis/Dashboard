import React, { useRef } from "react";



function UsuariosRow(props) {
    const cat = useRef();
    const userToUpdate = {email:"",type_id:1} //Setea el usuario para enviar a la API, con el tipo de usuario por default siendo el usuario común

    function getCategoryId (optionArray) {
        let optionDescription = ""
        let categoryId
        optionArray.forEach(option => {
            //Asigna el valor de la opción seleccionada a optionDescription
            if (option.selected === true) {
                optionDescription = option.value
            }
        })
        props.categorias.forEach(objetoCategoria => {
            if (objetoCategoria.user_type == optionDescription) {
                categoryId =  objetoCategoria.id
            }
        })
        return categoryId
    }
    function changeUserType (e) {
        e.preventDefault();
        let options = Array.from(cat.current.children); // Captura las opciones dentro del select y las transofmra en array
        userToUpdate.type_id = getCategoryId(options); // captura el Id de la categoría seleccionada y lo asigna al objeto que funcionará de update
        userToUpdate.email = props.usuario.email
        console.log(userToUpdate)

        fetch('/api/userCategories?_method=PUT',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify(userToUpdate)
        })
        .then(console.log('success'));
    }
    return (
        <React.Fragment>
            <tr>
                <td>{props.usuario.id}</td>
                <td>{props.usuario.fullName}</td> 
                <td>{props.usuario.email}</td>
                <td>{props.usuario.user_type.user_type}</td>
                <td>
                    <select ref={cat}>
                        {props.categorias.map((categoria,i) => 
                        <option key={`categoria${i}`} value={categoria.user_type}>{categoria.user_type}</option>)}
                    </select>
                </td>
                <td><button class="btn btn-primary boton-modificar" onClick={changeUserType}>Modificar</button></td>
            </tr>
        </React.Fragment>
    )
}

export default UsuariosRow