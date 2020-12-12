import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';

class AdminVentasEmpleado extends Component {
    renderBody() {
        return (
            <div>
                <h1>Ventas Empleados</h1>
            </div>
        )
    }

    render(){
        return(
           <AdminFrame body={this.renderBody()} />
        );
    }

}

export default AdminVentasEmpleado