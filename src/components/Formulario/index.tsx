import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../Button';

import style from './Formulario.module.scss';

import { ITarefa } from '../../types/tarefa';
interface FormularioProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}
function Formulario({ setTarefas }: FormularioProps) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('00:00');

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      {
        tarefa,
        tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa('');
    setTempo('00:00');
  }

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
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
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="01:30:00"
        ></input>
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default Formulario;
