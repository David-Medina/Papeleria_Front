import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import EditUsuarioForm from '../../components/backend/EditUsuario';
import proxy from '../../proxy';
class AdminEditarProducto extends Component {

    handleSubmit=(values)=>{
        const prox = new proxy();
        prox.updateUsuario(values);
        console.log(values);
        window.location.replace('admin-usuarios');
    };

    renderBody() {
        return (
            <EditUsuarioForm onSubmit={this.handleSubmit} data={this.props.location.usuario}/>
        )
    }

    render(){
        return(
           <AdminFrame body={this.renderBody()} />
        );
    }

}

export default AdminEditarProducto