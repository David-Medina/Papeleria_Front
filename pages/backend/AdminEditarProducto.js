import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import EditProductoForm from '../../components/backend/EditProducto';
import proxy from '../../proxy';

class AdminEditarProducto extends Component {

    handleSubmit=(values)=>{
        const prox = new proxy();
        prox.updateProducto(values);
        console.log(values);
        window.location.replace('admin-productos');
    };

    renderBody() {
        return (
            <EditProductoForm onSubmit={this.handleSubmit} data={this.props.location.producto}/>
        )
    }

    render(){
        return(
           <AdminFrame body={this.renderBody()} />
        );
    }

}

export default AdminEditarProducto