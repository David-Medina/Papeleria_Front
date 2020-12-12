import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
class AgregarPapel extends Component {

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
                            <Field name="tipo_Papel" label="Tipo Papel" component={this.renderField} type="text" placeholder="Tipo Papel" />
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
    if (!values.tipo_Papel) {
        error.tipo_Papel = 'Escribe el tipo_Papel por favor.';
    }
    return error;
};

const AgregarPapelForm = reduxForm({
    form: 'AgregarPapelForm',
    validate: validator
})(AgregarPapel);

export default AgregarPapelForm;
