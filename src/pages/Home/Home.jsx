import Sidebar from '../../componenents/Sidebar/Sidebar';
import Progress from '../../componenents/Progress/Progress';
import style from './Home.module.css';

function Home() {
  return (
    <div className={style.home}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <main className={style.main}>
        <Progress />
      </main>
    </div>
  );
}

export default Home;
