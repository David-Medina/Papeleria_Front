import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import proxy from '../../proxy';
import '../../css/main.css';
import '../../css/util.css';
import Swal from 'sweetalert2';
import {Table, Tbody, Td, Th, Thead, Tr} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const prox = new proxy();
class AdminUsuarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarios:[]
        }
    }
    componentDidMount() {
        this.getValues();
    }
    async getValues() {
        var usuarios = await prox.getUsuarios()
        console.log(usuarios.data.modelo)
        this.setState({ usuarios: usuarios.data.modelo});
    }

    agregarUsuario = () => {
        this.props.history.push({pathname:'/agregar-usuario'})
    }
    

    editUsuario = (usuario) => {
        // console.log(usuario)
        this.props.history.push({
            pathname: '/editar-usuario',
            usuario
        });
    }
    deleteProduct = (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás recuperar este elemento.",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#dc3545',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                prox.deleteUsuario(id);
                Swal.fire({
                    title: '¡Operación exitosa!',
                    text: 'El elemento ha sido eliminado correctamente.',
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                }).then(() => { 
                    window.location.reload();
                });
            }
        });
        
    }

    renderBody() {
        return (
                <div>
                    <div className="col-md-12 col-sm-12">
                    <button className="btn btn-sm btn-success" onClick={()=>this.agregarUsuario()}>AGREGAR</button>
                    </div>
                    <Table className="table-admin">
                        <Thead>
                                <Tr>
                                    <Th>Usuario</Th>
                                    <Th >Contraseña</Th>
                                    <Th>Nombre</Th>
                                    <Th>Apellido Paterno</Th>
                                    <Th>Apellido Materno</Th>
                                    <Th>editar</Th>
                                    <Th>borrar</Th>
                                </Tr>
                        </Thead>
                        <Tbody>
                        {this.state.usuarios.map(usuario => {
                                return (
                                    <Tr key={usuario.idUsuario}>
                                         <Td>{usuario.nUsuario}</Td>
                                        <Td>{usuario.contrasenia}</Td>
                                        <Td>{usuario.nombre}</Td>
                                        <Td>{usuario.apellidoPaterno}</Td>
                                        <Td>{usuario.apellidoMaterno}</Td>
                                        <Td><button key={'edit' + usuario.idUsuario} className="btn btn-warning" onClick={() => this.editUsuario(usuario)}> E</button></Td>
                                        <Td><button key={'delete' + usuario.idUsuario} className="btn btn-danger" onClick={() => this.deleteProduct(usuario.idUsuario)}> D</button></Td>
                                        </Tr>
                                    )
                                })}
                        </Tbody>
                </Table>
				</div>
        )
    }

    render(){
        return(
           <AdminFrame body={this.renderBody()} />
        );
    }


}

export default AdminUsuarios