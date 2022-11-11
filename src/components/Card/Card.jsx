import Logo from '../../assets/black-logo.jpg';
import Background from '../../assets/christopher-gower-m_HRfLhgABo-unsplash 1.png';
import formatTimeString from '../../utils/formatTimeString';

function Card({ course, roadmap }) {
  console.log(course);
  const courseCard = (
    <div
      className='flex flex-col justify-between py-6 px-4 bg-red-300 text-sm h-64 w-64 rounded-2xl text-white font-medium cursor-pointer'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.75)), url('${Background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img
            src={Logo}
            alt='logo'
            className='border-2 border-dashed border-evolution h-8 w-8 rounded-full '
          />
          <p className='text-base'>{course?.author}</p>
        </div>
        <p className='rounded-md p-1  bg-evolution bg-opacity-50'>
          {formatTimeString(course?.length)}
        </p>
      </div>
      <p className='p-2 h-14 flex items-center justify-center rounded-lg font-medium  bg-evolution bg-opacity-50'>
        {course?.course}
      </p>
    </div>
  );

  const roadmapCard = (
    <div
      className='flex flex-col justify-between py-6 px-4 bg-red-300 text-sm h-64 w-64 rounded-2xl text-white font-medium cursor-pointer'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.75)), url('${Background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img
            src={Logo}
            alt='logo'
            className='border-2 border-dashed border-evolution h-8 w-8 rounded-full '
          />
          <p className='text-base'>{roadmap?.author}</p>
        </div>
        <p className='rounded-md p-1  bg-evolution bg-opacity-50'>
          {formatTimeString(roadmap?.length)}
        </p>
      </div>
      <p className='p-2 h-14 flex items-center justify-center rounded-lg font-medium  bg-evolution bg-opacity-50'>
        {roadmap?.course}
      </p>
    </div>
  );

  return course ? courseCard : roadmapCard;
}

export default Card;
