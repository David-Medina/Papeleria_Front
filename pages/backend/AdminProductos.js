import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import proxy from '../../proxy';
import '../../css/main.css';
import '../../css/util.css';
import Swal from 'sweetalert2';
import {Table, Tbody, Td, Th, Thead, Tr} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const prox = new proxy();
class AdminProductos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productos:[]
        }
    }
    componentDidMount() {
        this.getValues();
    }
    async getValues() {
        var productos = await prox.getProductos()
        this.setState({ productos: productos.data.modelo});
    }

    agregarProducto = () => {
        this.props.history.push({pathname:'/agregar-producto'})
    }
    

    editProducto = (producto) => {
        // console.log(producto)
        this.props.history.push({
            pathname: '/editar-producto',
            producto
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
                prox.deleteProducto(id);
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
                    <button className="btn btn-sm btn-success" onClick={()=>this.agregarProducto()}>AGREGAR</button>
                    </div>
                    <Table className="table-admin">
                        <Thead>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Producto</Th>
                                    <Th >Cantidad</Th>
                                    <Th>Costo Unitario</Th>
                                    <Th>Costo Mayoreo</Th>
                                    <Th>editar</Th>
                                    <Th>borrar</Th>
                                </Tr>
                        </Thead>
                        <Tbody>
                        {this.state.productos.map(producto => {
                                return (
                                    <Tr key={producto.idProducto}>
                                         <Td>{producto.idProducto}</Td>
                                        <Td>{producto.productoN}</Td>
                                        <Td>{producto.cantidad}</Td>
                                        <Td>{producto.costo_unitario}</Td>
                                        <Td>{producto.costo_mayoreo}</Td>
                                        <Td><button key={'edit' + producto.idProducto} className="btn btn-warning" onClick={() => this.editProducto(producto)}> E</button></Td>
                                        <Td><button key={'delete' + producto.idProducto} className="btn btn-danger" onClick={() => this.deleteProduct(producto.idProducto)}> D</button></Td>
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

export default AdminProductos