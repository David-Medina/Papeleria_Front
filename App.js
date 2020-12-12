import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import AdminHome from './pages/backend/AdminHome';
import AdminProductos from './pages/backend/AdminProductos'
import AdminVentasDia from './pages/backend/AdminVentasDia'
import AdminVentasEmpleado from './pages/backend/AdminVentasEmpleado'
import AdminTiposPapel from './pages/backend/AdminTiposPapel'
import AdminUsuarios from './pages/backend/AdminUsuarios'
import AdminEditarProductos from './pages/backend/AdminEditarProducto'
import AdminEditarUsuario from './pages/backend/AdminEditarUsuario'
import AdminAgregarProducto from './pages/backend/AdminAgregarProducto'
import AdminAgregarUsuario from './pages/backend/AdminAgregarUsuario'
import AdminAgregarPapel from './pages/backend/AdminAgregarPapel'
import AdminEditarPapel from './pages/backend/AdminEditarPapel'
import ListaProductos from './pages/frontend/ListaProductos'
import Comprar from './pages/frontend/Comprar'
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/admin-home' component={AdminHome}/>
          <Route exact path='/admin-productos' component={AdminProductos}/>
          <Route exact path='/admin-tipoPapel' component={AdminTiposPapel}/>
          <Route exact path='/admin-usuarios' component={AdminUsuarios}/>
          <Route exact path='/admin-ventas-empleado' component={AdminVentasEmpleado}/>
          <Route exact path='/admin-ventas-dia' component={AdminVentasDia}/>
          <Route exact path='/editar-producto' component={AdminEditarProductos}/>
          <Route exact path='/agregar-producto' component={AdminAgregarProducto} />
          <Route exact path='/agregar-usuario' component={AdminAgregarUsuario} />
          <Route exact path='/editar-usuario' component={AdminEditarUsuario} />
          <Route exact path='/agregar-papel' component={AdminAgregarPapel} />
          <Route exact path='/editar-papel' component={AdminEditarPapel} />
          <Route exact path='/productos' component={ListaProductos}/>
          <Route exact path='/comprar' component={Comprar} />
          <Route exact path='/' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App
