import React, { Component } from 'react';
import proxy from '../proxy';
import Swal from 'sweetalert2';
import LoginFormForm from '../components/LoginForm';
const prox = new proxy()
class Login extends Component{
    handleSubmit = (values) =>
    {
        const usuario = values.usuario;
        const contrasenia = values.contrasenia;
        this.revisarLogin(usuario, contrasenia);
    }

    async revisarLogin(usuario, contrasenia) {
        const login = await prox.validarLogin({ usuario, contrasenia });
        if (login.tieneResultado) {
            if (login.modelo.idrol == 1) {
                window.location.replace('admin-productos');
            } else if (login.modelo.idrol == 4) {
                window.location.replace('productos');
            }
        } else {
            Swal.fire({
                title: '¡Lo Sentimos!',
                text: 'Tus accesos son incorrectos.',
                icon: 'error',
                confirmButtonText: 'Continuar'
            }).then(() => { 
               
            });
        }
    }

    render()
    {
        return (
            <div className="form-login">
                <LoginFormForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Login;