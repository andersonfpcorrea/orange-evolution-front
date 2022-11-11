import { useContext } from 'react';
import AppContext from '../../context/context';
import Card from '../Card/Card';

function Recommended() {
  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);
  return (
    <div className='flex flex-col gap-8 w-[50rem]'>
      <h2 className='font-medium text-2xl'>Recomendado para você</h2>
      <div className='flex gap-4 flex-wrap'>
        {courses.map((course) => (
          <Card course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
