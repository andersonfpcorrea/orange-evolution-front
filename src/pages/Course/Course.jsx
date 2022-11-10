import style from './Course.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

function Course() {
  return (
    <div className={style.page}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <main className={style.main}>Hello</main>
    </div>
  );
}

export default Course;
