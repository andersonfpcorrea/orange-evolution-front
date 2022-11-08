import style from './Sidebar.module.css';
import logo from '../../assets/orange-juice-logo.png';

function Sidebar() {
  return (
    <nav className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img src={logo} alt='Orange Juice logo' />
        <ul className={style.sidebar__list}>
          <ul>Home</ul>
          <ul>Home</ul>
          <ul>Home</ul>
          <ul>Home</ul>
        </ul>
      </div>
      <p>Sair</p>
    </nav>
  );
}

export default Sidebar;
