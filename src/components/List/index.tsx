import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './List.module.scss';

interface ListProps  {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function List({ tarefas, selecionaTarefa }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default List;
