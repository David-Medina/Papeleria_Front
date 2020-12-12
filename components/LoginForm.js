import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
class LoginForm extends Component {

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
                            <Field name="usuario" label="Usuario" component={this.renderField} type="text" placeholder="" />
                            <Field name="contrasenia" label="Contraseña" component={this.renderField} type="password" placeholder="" />
                            <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export const validator = values => {

    const error = {};
    if (!values.usuario) {
        error.usuario = 'Escribe el usuario por favor.';
    }
    if (!values.contrasenia) {
        error.contrasenia = 'Escribe la contraseña por favor.';
    }
    return error;
};

const LoginFormForm = reduxForm({
    form: 'LoginFormForm',
    validate: validator
})(LoginForm);

export default LoginFormForm;
