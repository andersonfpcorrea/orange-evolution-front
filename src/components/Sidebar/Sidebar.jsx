import style from './Sidebar.module.css';
import logo from '../../assets/logo.png';
import {
  MdHome,
  MdRadar,
  MdComputer,
  MdPerson,
  MdExitToApp,
} from 'react-icons/md';

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
            // return (
            //   <li key={el}>
            //     <NavLink
            //       to={routes[i]}
            //       className='flex items-center gap-4 rounded-3xl ml-12 py-2 px-4 w-full'
            //       style={({ isActive }) =>
            //         isActive
            //           ? { color: '#fb6d3a', backgroundColor: 'white' }
            //           : undefined
            //       }
            //       onClick={() => setView}
            //     >
            //       <>{icons[i]}</>
            //       <p>{el}</p>
            //     </NavLink>
            //   </li>
            // );
            return (
              <li
                key={el}
                className={`flex items-center gap-4 rounded-3xl ml-12 py-2 px-4 w-full ${
                  view === routes[i] && 'text-evolution bg-white'
                }`}
                onClick={() => setView(routes[i])}
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
