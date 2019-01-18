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

  addBruno = (bruno) => { //o argumento bruno é um estado que é passado pelo componente filho.
    bruno.id = Math.random(); // é gerado um id automaticamente *de forma horrivel*
    let brunos = [...this.state.brunos, bruno]; //a form mais facil de atualizar um state de array é refazendo um array e adicionando um novo registro ao array. A propriedade rest "..." adiciona cada registro em um objeto próprio, e ao final é adicionado um novo registro
    this.setState({
      brunos: brunos //o estado é atualizado.
    })
  }
  render() {
    return (
      <div className="app">
        <h1>My first application</h1>
        <p>oi</p>
        <Brunos brunos={this.state.brunos}/> 
        <AddBruno addBruno={this.addBruno}/>
        {/* uma função é passada como prop para poder ser recebido um dado */}
      </div> //props são atributos passados do componente pai para um componente filho, um exemplo são name, age e teeth. Eles são usados como variaveis no componente filho
    );
  }
}

export default App;
