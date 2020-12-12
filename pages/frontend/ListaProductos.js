import React, { Component } from 'react'
import '../../css/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import proxy from '../../proxy';

const prox = new proxy()
const listaProductos = []
class ListaProductos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            listaProductos:[]
        }
    }
    
    componentDidMount() {
        this.getValues();
        
    }

    async getValues() {
        var productos = await prox.getProductos()
        console.log(productos.data.modelo)
        this.setState({data:productos.data.modelo})
    }

    Add(data) {
        console.log(data)
        var dataExists = false;
        listaProductos.forEach(producto => {
            if (producto.productoN === data.productoN) {
                dataExists = true;
                producto.cantidadCarrito += 1;
            }
        });
        if (!dataExists) {
            data.cantidadCarrito = 1;
            listaProductos.push(data);
        }
        console.log(listaProductos)
    }

    Comprar = () => {
        // console.log(producto)
        this.props.history.push({
            pathname: '/comprar',
            listaProductos
        });
    }
    
    render() {
        return (
            <div>
                <nav className="navigation">
                    <div className="container">
                        <div className="navigation__right">
                                <ul className="menu menu--right">
                                    <li><button onClick={()=>this.Comprar()} >Comprar</button></li>
                                </ul>
                        </div>
                    </div>
                </nav>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="ps-section__header mb-50">
                            <h3 className="ps-section__title ps-section__title--left">Productos</h3>
                        </div>
                    </div>
                    
                    <div className="row">
                        {this.state.data.map(data => {
                                return (
                                <div  key={data.idProducto}className="grid-products ps-product--list col-md-4">
                                    <div className="ps-product__thumbnail"><Link className="ps-product__overlay" to="#"></Link><img src="#" alt=""></img></div>
                                        <div className="ps-product__content">
                                            <h4 className="ps-product__title"><Link to="#">{ data.productoN}</Link></h4>
                                            <p className="ps-product__price">
                                                £{data.costo_unitario}
                                            </p><button key={'add'+data.idProducto}className="ps-btn ps-btn--xs" onClick={()=>this.Add(data)}>Add</button>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    
                    

                </div>
        )
    }
}

export default ListaProductos
