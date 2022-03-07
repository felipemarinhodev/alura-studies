const HORA_EM_SEGUNDOS = 3600;
const MINUTO_EM_SEGUNDOS = 60;
export function tempoParaSegundos(tempo: string) {
	const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":");

	const horasEmSegundos = Number(horas) * HORA_EM_SEGUNDOS;
	const minutosEmSegundos = Number(minutos) * MINUTO_EM_SEGUNDOS;
	return horasEmSegundos + minutosEmSegundos + Number(segundos);
}
