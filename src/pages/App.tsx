import Formulario from '../components/Formulario';
import List from '../components/List';
import Timer from '../components/Timer';

import style from './App.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario />
      <Timer />
      <List />
    </div>
  );
}

export default App;
