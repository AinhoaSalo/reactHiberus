import React from "react";

class Formulario extends React.Component{
    render(){
        return(
            <div>
                <h1>Contacto</h1>
                <form>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="nombre" onChange={this.props.onChange} value={this.props.formValues.nombre}/>
                    </div>
                    <div>
                        <label>Apellidos:</label>
                        <input type="text" name="apellidos" onChange={this.props.onChange} value={this.props.formValues.apellidos}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" onChange={this.props.onChange} value={this.props.formValues.email}/>
                    </div>
                    <div>
                        <label>Motivo de consulta:</label>
                        <input type="text" name="motCon" onChange={this.props.onChange} value={this.props.formValues.motCon}/>
                    </div>
                    <div>
                        <label>Escriba su mensaje:</label>
                        <input type="text" name="mensaje" onChange={this.props.onChange} value={this.props.formValues.mensaje}/>
                    </div>
                    <div>
                        <button type="button">Enviar</button>
                    </div>
                </form>
            </div>
            
        );
    }
}

export {Formulario};
