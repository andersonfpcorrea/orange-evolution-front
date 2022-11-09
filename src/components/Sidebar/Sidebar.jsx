import style from './Sidebar.module.css';
import logo from '../../assets/logo.png';
import {
  MdHome,
  MdRadar,
  MdComputer,
  MdPerson,
  MdExitToApp,
} from 'react-icons/md';
import { useState } from 'react';

function Sidebar() {
  const [active, setActive] = useState('Home');
  const icons = [<MdHome />, <MdRadar />, <MdComputer />, <MdPerson />];
  const content = ['Home', 'Explore conteúdos', 'Meus cursos', 'Meu perfil'];

  return (
    <nav className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img src={logo} alt='Orange Juice logo' className={style.logo} />
        <ul className={style.sidebar__list}>
          {content.map((el, i) => {
            return (
              <li
                key={el}
                className={
                  el === active
                    ? style['li-element--active']
                    : style['li-element']
                }
                onClick={() => setActive(el)}
              >
                <>{icons[i]}</>
                <p>{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.sidebar__down}>
        <MdExitToApp />
        <p>Sair</p>
      </div>
    </nav>
  );
}

export default Sidebar;
