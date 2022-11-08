import Sidebar from '../../componenents/Sidebar/Sidebar';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <main className={style.main}>Main</main>
    </div>
  );
}

export default Home;
