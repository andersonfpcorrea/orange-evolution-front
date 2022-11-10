import { MdKeyboardBackspace } from 'react-icons/md';
import MyCoursesMain from '../../components/MyCoursesMain/MyCoursesMain';

function MyCourses() {
  return (
    <>
      <div className='fixed top-[-48px] left-[-42px]'>
        <MdKeyboardBackspace style={{ width: '24px', height: '24px' }} />
      </div>
      <MyCoursesMain />
    </>
  );
}

export default MyCourses;
