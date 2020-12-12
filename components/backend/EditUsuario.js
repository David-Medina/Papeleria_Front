import React, { Component } from 'react'
import { reduxForm, Field, change } from 'redux-form';

class EditUsuario extends Component {

    componentDidMount() {
        const { data } = this.props
        this.props.dispatch(change('EditUsuarioForm', 'nUsuario', data.nUsuario));
        this.props.dispatch(change('EditUsuarioForm', 'contrasenia', data.contrasenia));
        this.props.dispatch(change('EditUsuarioForm', 'nombre', data.nombre));
        this.props.dispatch(change('EditUsuarioForm', 'apellidoPaterno', data.apellidoPaterno));
        this.props.dispatch(change('EditUsuarioForm', 'apellidoMaterno', data.apellidoMaterno));
        this.props.dispatch(change('EditUsuarioForm', 'idRol', data.idRol));
      
    }
    renderField = ({input, meta, type, label, name, placeholder}) => (
        type === 'hidden' ?
            <input {...input} type="hidden"/>
            :
            <div className="form-group">
                <label className="control-label" htmlFor={name}>{label}</label>
                <input className="form-control" {...input} type={!type ? 'text' : type} placeholder={placeholder} />
                { meta.touched && meta.error && <span className='text-danger'>{meta.error}</span> }
            </div>
    );
    render() {
        const { handleSubmit, submitting, pristine } = this.props;
        
        return (
            <div className="card">
                <div className="body">
                    <div className="form-container m-b-30">
                        <form onSubmit={handleSubmit}>
                            {/* <Field name="productoN" label="Nombre" component={this.renderField} type="text" placeholder="Nombre" /> */}
                            <label className="control-label">{this.props.data.nUsuario}</label>
                            <Field name="contrasenia" label="contrasenia" component={this.renderField} type="text" placeholder="contrasenia" />
                            <Field name="nombre" label="Nombre" min="0" component={this.renderField} type="text" placeholder="Nombre" />
                            <Field name="apellidoPaterno" label="apellido paterno" component={this.renderField} type="text" placeholder="apellido paterno" />
                            <Field name="apellidoMaterno" label="apellido materno" component={this.renderField} type="text" placeholder="apellido materno" />
                            <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export const validator = values => {
    const error = {};
    if(!values.productoN){
        error.productoN = 'Escribe el nombre por favor.';
    }
    if(!values.cantidad){
        error.cantidad = 'Escribe la cantidad por favor.';
    }
    if(!values.costo_unitario){
        error.costo_unitario = 'Escribe la costo unitario por favor.';
    }
    if(!values.costo_mayoreo){
        error.costo_mayoreo = 'Escribe el costo mayoreo por favor.';
    }

    return error;
};

const EditUsuarioForm = reduxForm({
    form: 'EditUsuarioForm',
    validate:validator
})(EditUsuario);

export default EditUsuarioForm;
