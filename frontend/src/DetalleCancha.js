import React, { Component } from 'react';
import axios from 'axios';
import FormReserva from './components/FormReserva';
import ListaReservas from './components/ListaReservas';

class DetalleCancha extends Component {
  state = { 
    cancha: {},
    reservas:[]
  }

  componentDidMount() {           
    let id = this.props.match.params.id;
    axios
    .get(`http://localhost:8000/api/canchas/${id}/`)
    .then(res => this.setState({cancha: res.data}));
    
    axios  
    .get(`http://localhost:8000/api/reservas_ocupadas/${id}/`)  
    .then(res => this.setState({reservas: res.data}));
  }

  render() {
    const { cancha } = this.state;
    return (
      <div className="row justify-content-center p-4">
        <div className="col-md-6 p-2">
          <h1 className="m-1 text-center">{cancha.nombre}</h1>
          <ul className="list-group">
            <li className="list-group-item bg-info font-weight-bold">Código de cancha: {cancha.codigo}</li>
            <li className="list-group-item bg-light">Tipo de cancha: {cancha.tipo}</li>
            <li className="list-group-item bg-info">{
              cancha.iluminacion 
                ? "Iluminacion: SI"
                : "Iluminacion: NO"
            }</li>
            <li className="list-group-item  bg-light">{
              cancha.vestuario
                ? "Vestuario: SI"
                : "Vestuario: NO"
            }</li>
            <li className="list-group-item  bg-info">{
              cancha.cesped_sintetico
                ? "Cesped sintético: SI"
                : "Cesped sintético: NO"
            }</li>
          </ul>
          <h2 className="m-3 mt-5 text-center">Lista de reservas</h2>
            <div>
              <ListaReservas
                reservas={this.state.reservas}
              />
            </div>
        </div>
        <div className="col-md-6 p-2">
          <FormReserva 
            canchaID={cancha.id}
          />
        </div>
      </div>
    )
  }
}

export default DetalleCancha;