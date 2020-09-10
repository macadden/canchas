import React, { Component } from 'react';
import axios from 'axios';
import Cancha from './components/Cancha';


class App extends Component {

  state = { 
    canchas: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/canchas/') 
      .then(res => this.setState({canchas: res.data}));
  }

  renderCanchas = () => {
    const { canchas } = this.state;
    return (
      canchas.map(c => (
        <div className="col-md-4" key={c.id}>
          <Cancha
            id={c.id}
            nombre={c.nombre}
            codigo={c.codigo}
            tipo={c.tipo}
            iluminacion={c.iluminacion}
            vestuario={c.vestuario}
            cespedSintetico={c.cesped_sintetico}
          />
        </div>
      ))
    )
  }

  render() {
    return (
        <div className="bg-dark">
          <div className="row">
              {this.renderCanchas()}        
          </div>
        </div>
    );
  }
}

export default App;