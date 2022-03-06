import { ITarefa } from '../../../types/tarefa';
import style from '../List.module.scss';

export default function Item({ tarefa, tempo }: ITarefa) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
