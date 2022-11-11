import { useContext } from 'react';
import AppContext from '../../context/context';
import Card from '../Card/Card';

function Contents() {
  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);
  return (
    <div
      className='flex flex-col gap-8
    '
    >
      <h2 className='text-2xl font-medium'>Repositório de Conteúdos</h2>
      <div className='flex gap-3 flex-wrap w-[50rem]'>
        {courses.map((course) => (
          <Card course={course} />
        ))}
      </div>
    </div>
  );
}

export default Contents;
