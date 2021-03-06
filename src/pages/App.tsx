import { useState } from 'react';

import Formulario from '../components/Formulario';
import List from '../components/List';
import Timer from '../components/Timer';

import { ITarefa } from '../types/tarefa';

import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefaAnteriores) =>
      tarefaAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefas() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefaAnteriores) =>
        tarefaAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Timer selecionado={selecionado} finalizarTarefas={finalizarTarefas} />
    </div>
  );
}

export default App;
