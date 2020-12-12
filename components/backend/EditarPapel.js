import React, { Component } from 'react'
import { reduxForm, Field, change } from 'redux-form';

class EditarPapel extends Component {

    componentDidMount() {
        const { data } = this.props
        this.props.dispatch(change('EditarPapelForm', 'tipo_Papel', data.tipo_Papel));
      
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
                            <label className="control-label">{this.props.data.productoN}</label>
                            <Field name="cantidad" label="Cantidad" component={this.renderField} type="text" placeholder="Cantidad" />
                            <Field name="costo_unitario" label="Costo unitario" min="0"component={this.renderField} type="number" placeholder="Costo unitario" />
                            <Field name="costo_mayoreo" label="Costo Mayoreo" min="0" component={this.renderField} type="number" placeholder="Costo Mayoreo" />
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

const EditarPapelForm = reduxForm({
    form: 'EditarPapelForm',
    validate:validator
})(EditarPapel);

export default EditarPapelForm;
