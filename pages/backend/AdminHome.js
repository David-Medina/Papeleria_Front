import React, {Component} from "react";
import AdminFrame from "../../components/backend/AdminFrame";

class AdminHome extends Component {
    renderBody(){
        return(
            <h1>Hola aqui va mi panel B)</h1>
            
        );
    }

    render() {
        return(
            <AdminFrame body={this.renderBody()} />);
    }

}

export default AdminHome;