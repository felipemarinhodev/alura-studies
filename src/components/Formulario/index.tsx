import React from 'react';
import Button from '../Button';

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <label htmlFor="tarefa"></label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="tempo"></label>
          <input
            type="time"
            name="tarefa"
            id="tarefa"
            step="1"
            min="00:00:00"
            max="01:30:00"
          ></input>
        </div>
        <Button />
      </form>
    );
  }
}

export default Formulario;
