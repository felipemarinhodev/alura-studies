import { ITarefa } from '../../../types/tarefa';
import style from '../List.module.scss';

interface ItemProps extends ITarefa {
  selecionaTarefa: (tarefaSeleciona: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  id,
  completado,
  selecionado,
  selecionaTarefa,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
        selecionaTarefa({
          tarefa,
          tempo,
          id,
          completado,
          selecionado,
        })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
