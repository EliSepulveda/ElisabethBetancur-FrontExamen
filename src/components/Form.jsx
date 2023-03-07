import React, { useState } from 'react'
import Card from './Card'
import MensajeError from './MensajeError'

const Form = () => {
    const [usuario, setUsuario]= useState({
        nombre:'',
        color:'',
    })

    const [show, setShow]= useState(false)

    const handleSumbit = (event) =>{
        event.preventDefault()
        setShow(true)
    }

    const mensaje = () =>{
        if(usuario.nombre.length >= 3 && usuario.nombre.charAt(0)!= " " && usuario.color.length >= 6) return <Card nombre={usuario.nombre} color ={usuario.color}/>
        else return <MensajeError/>
    }
    
    return (
    <>
        <form onSubmit={handleSumbit}>
            <label>Dime cual es tu nombre </label>
            <input type="text" value={usuario.nombre} onChange={(event)=> setUsuario({...usuario, nombre: event.target.value})} />
            <label>Dime cual es tu color favorito </label>
            <input type="text" value={usuario.color} onChange={(event)=> setUsuario({...usuario, color: event.target.value})} />
            <button onClick={mensaje}>Enviar</button>
        </form>
        {show?mensaje():null}
    </>
    )
}

export default Form