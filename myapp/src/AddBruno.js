import React, { Component } from "react";

class AddBruno extends Component {

  state = {
    name: null,
    age: null,
    teeth: null,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value, //o id dos elementos tem os mesmos nomes que os estados, então dessa forma ficaria mais otimizado o codigo e funciona, então a cada minima alteração em qualquer um dos campos, o estado é atualizado ao mesmo tempo
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBruno(this.state); //existe uma prop recebida com o nome de addBruno, é uma função existente no componente pai, e essa função possui um parametro. Passando o estado do AddBruno como parametro, a função no componente pai recebe por parametro um estado.
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="teeth">Teeth:</label>
          <input type="text" id="teeth" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddBruno;