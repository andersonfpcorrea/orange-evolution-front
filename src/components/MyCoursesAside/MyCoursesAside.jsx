import { AiOutlineMenu } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';

function MyCoursesAside({ selectedVideo, courseList, setSelectedVideo }) {
  console.log(courseList);
  const { videos } = courseList;

  const activeStyle = 'bg-evolution bg-opacity-40 rounded-l-full opacity-80';

  return (
    <aside className='flex flex-col gap-8'>
      <h2 className='text-3xl font-medium pl-8'>Trilha</h2>
      <ul className='flex flex-col'>
        {videos.map((video) => (
          <li
            className={`flex items-center gap-5 py-2 px-8 ${
              selectedVideo.id === video.id && activeStyle
            }`}
            key={video.id}
            onClick={() => setSelectedVideo(video)}
          >
            <div className='h-14 w-14 bg-evolution rounded-2xl grid place-items-center op'>
              <AiOutlineMenu
                style={{
                  height: '1.6rem',
                  width: '1.6rem',
                  fill: 'white',
                }}
              />
            </div>
            <div className='flex flex-col justify-between'>
              <p className='font-medium'>{video.course}</p>
              <div className='flex items-center gap-2 text-sm'>
                <span>{video.type}</span>
                <BsDot />
                <span>{video.length}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default MyCoursesAside;
