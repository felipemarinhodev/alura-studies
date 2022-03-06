import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';

import style from './Formulario.module.scss';

import { ITarefa } from '../../types/tarefa';
const NOVA_TAREFA = {
  tarefa: '',
  tempo: '00:00',
};
class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = NOVA_TAREFA;

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        ...this.state,
        selecionado: false,
        completado: false,
        id: uuidv4()
      },
    ]);
    this.setState(NOVA_TAREFA);
  }

  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
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
            value={this.state.tempo}
            onChange={(event) =>
              this.setState({ ...this.state, tempo: event.target.value })
            }
            min="00:00:00"
            max="01:30:00"
          ></input>
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Formulario;
