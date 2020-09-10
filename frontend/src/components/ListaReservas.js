import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Reserva from './reserva';

class ListaReservas extends Component {

    renderReservas = () => {
        const { reservas } = this.props;
        return (
            <div>
                {reservas.map( (item, index) => ( 
                    <div key={index}>
                            <Reserva
                            id_reserva = {item.id}
                            cliente = {item.cliente}
                            empleado= {item.empleado}
                            fecha_reserva = {item.fecha_reserva}
                            fecha = {item.fecha}
                            hora = {item.hora}
                            canchaID = {item.cancha}
                            />
                    </div>
                ))}
            </div>
        )
    }


    render() {
        return (
       this.renderReservas()
    )};
}

export default withRouter(ListaReservas);