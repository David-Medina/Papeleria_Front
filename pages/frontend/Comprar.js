import React, { Component } from 'react'
import proxy from '../../proxy';
import '../../css/main.css';
import '../../css/util.css';
import {Table, Tbody, Td, Th, Thead, Tr} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const prox = new proxy()
class Comprar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productos: []
        }
    }
    componentDidMount() {
        this.productos();
        this.addValues();
    }
    productos (){
        var lista = this.props.location.listaProductos;
        var productos = []
        lista.forEach(element => {
            var total = 0
            if (element.cantidadCarrito > 30) {
                total = element.cantidadCarrito * element.costo_mayoreo;
            } else {
                total = element.cantidadCarrito * element.costo_unitario;
            }
            const producto = {
                Idproducto: element.idProducto,
                IdCopia: 0,
                cantidad: element.cantidadCarrito,
                totalProducto: total
            }
            productos.push(producto)
        });

        this.setState({ productos: productos })
        console.log("state" + this.state.productos)
        
    }

    async addValues()
    {   
        var usuario = 'DavidYFM';
        const ticket = {
            usuario: usuario,
            productos: this.state.productos
        }
        await prox.AddTicket(ticket)
    }


    render() {
        console.log(this.props.location.listaProductos) 
        return(
           <h1>hola</h1>
        );
    }

}

export default Comprar