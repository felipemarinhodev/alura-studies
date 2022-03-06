import { useState } from 'react';

import Formulario from '../components/Formulario';
import List from '../components/List';
import Timer from '../components/Timer';

import { ITarefa } from '../types/tarefa';

import style from './App.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([])

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Timer />
    </div>
  );
}

export default App;
