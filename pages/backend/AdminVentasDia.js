import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';

class AdminVentasDia extends Component {
    renderBody() {
        return (
            <div>
                <h1>Ventas Dia</h1>
            </div>
        )
    }

    render(){
        return(
           <AdminFrame body={this.renderBody()} />
        );
    }

}

export default AdminVentasDia