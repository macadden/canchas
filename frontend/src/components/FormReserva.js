import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class FormReserva extends Component {
  state = {
    cliente: "",
    empleado: "",
    fecha: "",
    hora: "",
    error: ""
  }

  onChange = event => { 
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  crearReserva = (event) => {
    event.preventDefault();
    let dataToSubmit = {
      cliente: this.state.cliente,
      empleado: this.state.empleado,
      fecha: this.state.fecha,
      hora: this.state.hora,
      cancha: this.props.canchaID
    }
    axios
      .post(
        "http://localhost:8000/api/reservas/",
        dataToSubmit
      )
      .then(() => window.location.reload())
      .catch(err => {
        this.setState({
          error: err.response.data.non_field_errors[0]
        })
      })
  }
  
  render() {
    return (
      <form>
        <h1 className="m-3  text-center">Crear Nueva Reserva</h1>
        <input 
          type="text"
          placeholder="Nombre cliente"
          name="cliente"
          onChange={this.onChange}
          className="form-control m-2"
        />
        <input 
          type="text"
          placeholder="Nombre empleado"
          name="empleado"
          onChange={this.onChange}
          className="form-control m-2"
        />
        <input 
          type="text"
          placeholder="Fecha (YYYY-MM-DD)"
          name="fecha"
          onChange={this.onChange}
          className="form-control m-2"
        />
        <input 
          type="text"
          placeholder="Hora (HH:MM)"
          name="hora"
          onChange={this.onChange}
          className="form-control m-2"
        />
        {
          this.state.error &&
            <p className="m-2 text-danger">
              {this.state.error}
            </p>
        }
        <button 
          className="btn btn-success btn-lg ml-2"
          onClick={(event) => this.crearReserva(event)}
        >
          Reservar
        </button>
      </form>
    )
  }
}

export default withRouter(FormReserva);