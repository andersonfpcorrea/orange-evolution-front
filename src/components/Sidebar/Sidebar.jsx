import style from './Sidebar.module.css';
import logo from '../../assets/logo.png';
import {
  MdHome,
  MdRadar,
  MdComputer,
  MdPerson,
  MdExitToApp,
} from 'react-icons/md';
import { motion } from 'framer-motion';

function Sidebar({ setView, view }) {
  const icons = [<MdHome />, <MdRadar />, <MdComputer />, <MdPerson />];
  const content = ['Home', 'Explore conteúdos', 'Meus cursos', 'Meu perfil'];
  const routes = ['root', 'courses', 'myCourses', 'profile'];

  return (
    <nav className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img src={logo} alt='Orange Juice logo' className={style.logo} />
        <ul className={style.sidebar__list}>
          {content.map((el, i) => {
            const liActive = (
              <li key={el} onClick={() => setView(routes[i])}>
                <motion.div
                  layoutId='white'
                  className='flex items-center gap-4 rounded-l-3xl ml-12 py-2 px-4 text-evolution bg-white'
                >
                  <>{icons[i]}</>
                  <p>{el}</p>
                </motion.div>
              </li>
            );
            const liInactive = (
              <li
                key={el}
                className='flex items-center gap-4 ml-12 py-2 px-4 w-full'
                onClick={() => setView(routes[i])}
              >
                <>{icons[i]}</>
                <p>{el}</p>
              </li>
            );
            return view === routes[i] ? liActive : liInactive;
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
