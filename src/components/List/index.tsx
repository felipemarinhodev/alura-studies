import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';

function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={item.id}
            tarefa={item.tarefa}
            tempo={item.tempo}
            id={item.id}
            completado={item.completado}
            selecionado={item.selecionado}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
