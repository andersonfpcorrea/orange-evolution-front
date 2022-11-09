import Sidebar from '../../components/Sidebar/Sidebar';
import Progress from '../../components/Progress/Progress';
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
