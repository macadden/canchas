import React from 'react'
import { Link } from 'react-router-dom';

const Cancha = props => {
    const {
        id,
        nombre, 
        codigo, 
        iluminacion, 
        vestuario,
        cespedSintetico,
        tipo
    } = props;

    return (
        <div className="card text-center m-3">
            <div className="card-header font-weight-bold">
               <Link to={`/cancha/${id}`}>
                   { nombre }
               </Link>
            </div>
            <div className="card-body">
                <p className="card-text">Código: { codigo }</p>
                <p className="card-text">Tipo: { tipo }</p>
                <p className="card-text">{ 
                    iluminacion ? "Iluminacion: SI"
                    : "Iluminacion: NO"
                }</p>
                <p className="card-text">{ 
                    vestuario ? "Vestuario: SI"
                    : "Vestuario: NO"
                }</p>
                <p className="card-text mb-5">{ 
                    cespedSintetico ? "cespedSintetico: SI"
                    : "cespedSintetico: NO"
                }</p>
            </div>
        </div>
    )
}

export default Cancha;