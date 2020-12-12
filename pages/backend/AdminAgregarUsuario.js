import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import AgregarUsuarioForm from '../../components/backend/AgregarUsuario';
import proxy from '../../proxy';
class AdminAgregarUsuario extends Component {
    
    handleSubmit = (values) => {
        const prox = new proxy()
        console.log(values)
        prox.insertUsuario(values)
        window.location.replace('admin-usuarios');
    }

    renderBody() {
        return (
            <AgregarUsuarioForm onSubmit={this.handleSubmit} />
            
        )
    }
    
    render() {
        return (
            <AdminFrame body={this.renderBody()}/>
        )
    }
}
export default AdminAgregarUsuario
