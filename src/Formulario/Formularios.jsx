import React from "react";
import { useState } from "react";
import { Form, /* Col, Row, */ Button } from "react-bootstrap";
import Swal from 'sweetalert2';

const datainicial = {
    nombre: '',
    apellido: '',
    email: '',
    contraseña: '',
    confirmarContraseña: '',
}


const Formularios = () => {
    
    const [formulario, setFormulario] = useState (datainicial)

    const actualizarFormulario = e => {
        const {name, value} = e.target;
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    const validarClaves = (contraseña, confirmarContraseña) => {
        if(contraseña != confirmarContraseña) {
            Swal.fire('Contraseña invalida', 'Las contraseñas deben coincidir');
            return false;
        }else if(contraseña.length <8 || confirmarContraseña <8) {
            Swal.fire('Contraseña invalida', 'La clave debe tener almenos 8 caracteres')
            return false;
        }
        return true
    }

    const guardar = e => {
        e.preventDefault();
        if(validarClaves(formulario.contraseña, formulario.confirmarContraseña)) {
            console.log(Formularios)

        }
    }

    return (
        <React.Fragment>
            <Form onSubmit={guardar}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre..." name="nombre" value={formulario.nombre} onChange={actualizarFormulario} minLength={2} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Apellido..." name="apellido" value={formulario.apellido} onChange={actualizarFormulario} minLength={2}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email..." name="email" value={formulario.email} onChange={actualizarFormulario} minLength={5}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña..." name="contraseña" value={formulario.contraseña} onChange={actualizarFormulario}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña..." name="confirmarContraseña" value={formulario.confirmarContraseña} onChange={actualizarFormulario}/>
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </React.Fragment>
    )
}

export default Formularios;