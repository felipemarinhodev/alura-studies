import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/utils/time';
import { ITarefa } from '../../types/tarefa';
import Button from '../Button';
import Clock from './Clock';

import style from './Timer.module.scss';

interface TimerProps {
  selecionado: ITarefa | undefined;
}

export default function Timer({ selecionado }: TimerProps) {
  const [tempo, setTempo] = useState<number>();

	useEffect(() => {
		if (selecionado?.tempo) {
			setTempo(tempoParaSegundos(selecionado.tempo));
		}
	}, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
			Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button>Começar!</Button>
    </div>
  );
}
