import React from 'react';
import Button from '../Button';

import style from './Formulario.module.scss';

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          ></input>
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
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
