import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminFrame extends Component {
    render() {
        const {body} = this.props;
      return (
          
          <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <i className="fa fa-bars"></i>
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
              <div className="p-4 pt-5">
                <Link to='/admin-home'>
                  <h1>Lumin</h1>
                </Link>
                <ul className="list-unstyled components mb-5">
      
                <li>
                    <Link to="/admin-productos">
                      <span>Productos</span>
                    </Link>
                </li>
              
                <li>
                  <Link to="/admin-tipoPapel">
                    <span>Papel</span>
                  </Link>
              </li>
      
              <li>
                  <Link to="/admin-usuarios">
                    <span>Usuarios</span>
                  </Link>
              </li>

                
              <li>
                  <Link to="admin-ventas-dia">
                  <span>Ventas</span>
                  </Link>
              </li>

              <li>
                  <Link to="admin-ventas-empleado">
                  <span>Ventas Empleado</span>
                  </Link>
                </li>
                
                </ul>
              </div>
            </nav>
      
            <div id="content" className="p-4 p-md-5 pt-5">
              {body}
            </div>
          </div>
        );
    }
}

export default AdminFrame;