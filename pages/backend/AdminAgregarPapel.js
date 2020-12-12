import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import AgregarPapelForm from '../../components/backend/AgregarPapel';
import AgregarProducto from '../../components/backend/AgregarProducto';
import proxy from '../../proxy';
class AdminAgregarPapel extends Component {
    
    handleSubmit = (values) => {
        const prox = new proxy()
        console.log(values)
        prox.insertPapel(values)
        window.location.replace('admin-tipoPapel');
    }

    renderBody() {
        return (
            <AgregarPapelForm onSubmit={this.handleSubmit} />
            
        )
    }
    
    render() {
        return (
            <AdminFrame body={this.renderBody()}/>
        )
    }
}
export default AdminAgregarPapel
