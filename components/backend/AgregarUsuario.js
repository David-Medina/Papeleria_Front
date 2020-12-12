import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
class AgregarUsuario extends Component {

    renderField = ({ input, meta, type, label, name, placeholder }) => (
        type === 'hidden' ?
            <input {...input} type="hidden" />
            :
            <div className="form-group">
                <label className="control-label" htmlFor={name}>{label}</label>
                <input className="form-control" {...input} type={!type ? 'text' : type} placeholder={placeholder} />
                { meta.touched && meta.error && <span>{meta.error}</span> }
            </div>
    )

    render() {
        const { handleSubmit, submitting, pristine } = this.props;
        return (
            <div className="card">
                <div className="body">
                    <div className="form-container m-b-30">
                        <form onSubmit={handleSubmit}>
                            <Field name="nUsuario" label="Usuario" component={this.renderField} type="text" placeholder="Usuario" />
                            <Field name="contrasenia" label="contrasenia" component={this.renderField} type="text" placeholder="contrasenia" />
                            <Field name="nombre" label="Nombre" min="0" component={this.renderField} type="text" placeholder="Nombre" />
                            <Field name="apellidoPaterno" label="apellido paterno" component={this.renderField} type="text" placeholder="apellido paterno" />
                            <Field name="apellidoMaterno" label="apellido materno" component={this.renderField} type="text" placeholder="apellido materno" />
                            <Field name="idRol" label="id rol" component={this.renderField} type="text" placeholder="id rol" />
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
    if (!values.nUsuario) {
        error.nUsuario = 'Escribe el usuario por favor.';
    }
    if (!values.contrasenia) {
        error.contrasenia = 'Escribe la contrasenia por favor.';
    }
    if (!values.apellidoPaterno) {
        error.apellidoPaterno = 'Escribe la apellidoPaterno por favor.';
    }
    if (!values.apellidoMaterno) {
        error.apellidoMaterno = 'Escribe el apellidoMaterno por favor.';
    }
    return error;
};

const AgregarUsuarioForm = reduxForm({
    form: 'AgregarUsuarioForm',
    validate: validator
})(AgregarUsuario);

export default AgregarUsuarioForm;
