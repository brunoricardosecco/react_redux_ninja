import React, { Component } from 'react';
import Brunos from "./Brunos";
import AddBruno from "./AddBruno";

class App extends Component {
  state = {
    brunos: [
      { name: "bruno", age: 21, teeth: "white", id: 0 },
      { name: "joao", age: 24, teeth: "brown", id: 1 },
      { name: "filip", age: 30, teeth: "blsck", id: 2 },
    ],
  }

  addBruno = (bruno) => {
    bruno.id = Math.random();
    let brunos = [...this.state.brunos, bruno];
    this.setState({
      brunos: brunos
    })
    console.log(this.state.brunos);
  }
  render() {
    return (
      <div className="app">
        <h1>My first application</h1>
        <p>oi</p>
        <Brunos brunos={this.state.brunos}/> 
        <AddBruno addBruno={this.addBruno}/>
      </div> //props são atributos passados do componente pai para um componente filho, um exemplo são name, age e teeth. Eles são usados como variaveis no componente filho
    );
  }
}

export default App;
