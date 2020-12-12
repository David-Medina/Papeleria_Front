import React, { Component } from 'react'
import AdminFrame from '../../components/backend/AdminFrame';
import proxy from '../../proxy';
import '../../css/main.css';
import '../../css/util.css';
import Swal from 'sweetalert2';
import {Table, Tbody, Td, Th, Thead, Tr} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const prox = new proxy();
class AdminTiposPapel extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            papeles:[]
        }
    }
    componentDidMount() {
        this.getValues();
    }
    async getValues() {
        var papeles = await prox.getPapeles()
        this.setState({ papeles: papeles.data.modelo});
    }

    agregarPapel = () => {
        this.props.history.push({pathname:'/agregar-papel'})
    }
    

    editarPapel = (papel) => {
        // console.log(papel)
        this.props.history.push({
            pathname: '/editar-papel',
            papel
        });
    }
    deletePapel = (id) => {
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
                prox.deletePapel(id);
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
                    <button className="btn btn-sm btn-success" onClick={()=>this.agregarPapel()}>AGREGAR</button>
                    </div>
                    <Table className="table-admin">
                        <Thead>
                                <Tr>
                                    <Th>Id</Th>
                                    <Th>Tipo Papel</Th>
                                    <Th>borrar</Th>
                                </Tr>
                        </Thead>
                        <Tbody>
                        {this.state.papeles.map(papel => {
                                return (
                                    <Tr key={papel.idPapel}>
                                         <Td>{papel.idPapel}</Td>
                                        <Td>{papel.tipo_Papel}</Td>
                                        <Td><button key={'delete' + papel.idPapel} className="btn btn-danger" onClick={() => this.deletePapel(papel.idPapel)}> D</button></Td>
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

export default AdminTiposPapel