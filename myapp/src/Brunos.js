import React from "react";

//em um stateless component as props precisam ser especificadas, como não é uma classe e sim uma funcção, não tem como usar o metodo this, sendo assim não tem como referenciar props. Então explicitamente declarase a prop, por meio de "(props)" e em seguida "const bruno = props", ou de um modo mais direto usasse a desestruturação "({brunos}, {exelplo2}, {exemplo3}). De ambas as formas daria certo"
const Brunos = ({brunos}/* comentario acima se refere a isso */) => {
/*     const brunoList = brunos.map(bruno => {
      if(bruno.age > 21) {
        return (
          <div className="bruno" key={bruno.id}>
            <p>Name: {bruno.name}</p>
            <p>Age: {bruno.age}</p>
            <p>Teeth: {bruno.teeth}</p>
          </div>
        );
      } else {
        return null;
      }
    }) */
    const brunoList = brunos.map(bruno => {
      if(bruno.age > 21) {
        return (
          <div className="bruno" key={bruno.id}>
            <p>Name: {bruno.name}</p>
            <p>Age: {bruno.age}</p>
            <p>Teeth: {bruno.teeth}</p>
          </div>
        );
      } else {
        return null;
      }
    })
    return(
      <div className="bruno-list">
        { brunoList }
      </div>
    );
}


export default Brunos;