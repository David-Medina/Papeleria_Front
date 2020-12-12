import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import AgregarProducto from '../../components/backend/AgregarProducto';
import proxy from '../../proxy';
class AdminAgregarProducto extends Component {
    
    handleSubmit = (values) => {
        const prox = new proxy()
        console.log(values)
        prox.insertProducto(values)
        window.location.replace('admin-productos');
    }

    renderBody() {
        return (
            <AgregarProducto onSubmit={this.handleSubmit} />
        )
    }
    
    render() {
        return (
            <AdminFrame body={this.renderBody()}/>
        )
    }
}
export default AdminAgregarProducto
