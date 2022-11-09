import style from './Video.module.css';
import Sidebar from '../../components/SearchBar';

function Video() {
  return (
    <div className={style.page}>
      <Sidebar />
      {/* <Course />
      <CourseAside /> */}
    </div>
  );
}

export default Video;
