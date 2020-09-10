import React, { Component } from 'react';
import axios from 'axios';

class Reserva extends Component {

    state = {
          edit: false,
          cliente: "",
          empleado: "",
          fecha: "",
          hora: ""
      }
    
      onChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      }
    
      updateReserva = (id_reserva) => {
        let dataToSubmit = { 
            cliente: this.state.cliente,
            empleado: this.state.empleado,
            fecha: this.state.fecha,
            hora: this.state.hora,
            cancha: this.props.canchaID
        };
        axios.put(`http://localhost:8000/api/reservas/${id_reserva}/`, dataToSubmit).then(res => {
            window.location.reload();
        })
      }
    
      eliminarReserva = (id_reserva) => {
        axios.delete(`http://localhost:8000/api/reservas/${id_reserva}/`).then(res => {
            window.location.reload();
        })
        console.log(id_reserva)
      }
    
      render() {
        const { edit } = this.state;
        const { cliente, empleado, fecha, hora, id_reserva} = this.props;
        return (
          !edit 
          ? 
          <div className="mt-5"> 
            <ul className="list-group">
              <li className="list-group-item  bg-secondary  font-weight-bold">ID Reserva: {id_reserva}</li>
              <li className="list-group-item  bg-light">Cliente: {cliente}</li>
              <li className="list-group-item  bg-secondary">Empleado: {empleado}</li>
              <li className="list-group-item  bg-light">Fecha: {fecha}</li>
              <li className="list-group-item  bg-secondary">Hora: {hora}</li>               
            </ul> 
            <button className="btn btn-primary mt-2" onClick={() => this.setState({edit: true})}>Modificar</button>
            <button className="btn btn-danger ml-1 mt-2" onClick={() => this.eliminarReserva(id_reserva)}>Eliminar</button>
          </div>
          :
          <form>
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
            <button className="btn-success" onClick={() => this.updateReserva(id_reserva)}>Guardar</button>
            <button className="btn-secondary ml-1" onClick={() => this.setState({edit: false})}>Cancelar</button>
          </form>
        )
      }
}

export default Reserva;