import React, { useRef, useState, useEffect } from "react";

function UsuariosRow(props) {
    const cat = useRef();
    const userType = useRef();
    const row = useRef();
    const userToUpdate = {email:"",type_id:1} //Setea el usuario para enviar a la API, con el tipo de usuario por default siendo el usuario común
    const [tipoUsuario, setTipoUsuario] = useState("")

    const [refresh, setRefresh] = useState(0)
    function autoRefresh (n) {
        setRefresh(refresh+n)
    }
    function selectedOption (optionArray) {
        //Obtiene el valor (texto) de la opción seleccionada dado un array de opciones
        let valueToReturn = ""
        optionArray.forEach(option => {
            //Asigna el valor de la opción seleccionada a optionDescription
            if (option.selected === true) {
                valueToReturn = option.value
            }
        })
        return valueToReturn
    }
    function getCategoryId (optionArray) {
        //Obtiene (y retorna) el id de la categoría seleccionada dado un array de opciones
        let optionDescription = selectedOption(optionArray)
        let categoryId = 0
        props.categorias.forEach(objetoCategoria => {
            if (objetoCategoria.user_type === optionDescription) {
                categoryId =  objetoCategoria.id
            }
        })
        return categoryId
    }

    function changeUserType (e) {
        //Se ejecuta al presionar el botón "Modificar" y se encarga de hacer el llamado a la api, modificar el tipo de usuario en la BBDD
        //y llamar a la actualzización de estado de la columna "Tipo"
        e.preventDefault();
        let options = Array.from(cat.current.children); // Captura las opciones dentro del select y las transofmra en array
        //Armado del usuario que se enviará al servidor
        userToUpdate.type_id = getCategoryId(options); // captura el Id de la categoría seleccionada y lo asigna al objeto que funcionará de update
        userToUpdate.email = props.usuario.email

        fetch('/api/userCategories?_method=PUT',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body:JSON.stringify(userToUpdate)
        })
        .then(updateUserType(options));
    }

    function updateUserType(optionArray) {
        //Actualiza el estado de tipoUsuario con la opción seleccionada en el select
        let optionDescription = selectedOption(optionArray)
        setTipoUsuario(optionDescription)
    }  
    function deleteUser () {
        fetch(`/api/users/${props.usuario.id}?_method=DELETE`, {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            //body:JSON.stringify(userToDelete)
        })
        .then(autoRefresh(1));
    }
    useEffect( () => {
        //Hook que se encarga de actualizar el valor de la tabla cada vez que cambie el estado de tipoUsuario
        if (tipoUsuario !== ""){
            //Esto evita que pise todos los valores de la tabla cuando se carga el componente
            userType.current.innerText = tipoUsuario
        }
    },[tipoUsuario]);

    useEffect(()=>{
        //Acá debería ir algo que fuerce al componente a refrescarse
        if (refresh !== 0){
            row.current.innerHTML = ""
        }
      //  return function limpiarDatos(){ ... ejemplo use Effect 3er tiempo(desmontaje)
         //   refresh = 0;
        //}
    },[refresh]);

    return (
        <React.Fragment>
            <tr ref={row}>
                <td>{props.usuario.id}</td>
                <td>{props.usuario.fullName}</td> 
                <td>{props.usuario.email}</td>
                <td ref={userType}>{props.usuario.user_type.user_type}</td>
                <td>
                    <select className= "select-categoria" ref={cat}>
                        {props.categorias.map((categoria,i) => 
                        <option key={`categoria${i}`} value={categoria.user_type}>{categoria.user_type}</option>)}
                    </select>
                </td>
                <td><button className="btn btn-primary boton-modificar" onClick={changeUserType}>Modificar</button></td>
                <td><button className="btn btn-danger" onClick={deleteUser}>Eliminar</button></td>
            </tr>
        </React.Fragment>
    )
};

export default UsuariosRow;