import { AiOutlineMenu } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { motion } from 'framer-motion';

function MyCoursesAside({ selectedVideo, courseList, setSelectedVideo }) {
  const { videos } = courseList;

  const activeStyle = 'bg-evolution bg-opacity-40 rounded-l-full opacity-80';

  const VideosList = () => {
    return (
      <ul className='flex flex-col'>
        {videos.map((video) => {
          const liActive = (
            <li key={video.id} onClick={() => setSelectedVideo(video)}>
              <motion.div
                layoutId='selected'
                className={`flex items-center gap-5 py-2 px-8 ${activeStyle}`}
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
              </motion.div>
            </li>
          );

          const liInactive = (
            <li
              className='flex items-center gap-5 py-2 px-8'
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
          );

          return selectedVideo.id === video.id ? liActive : liInactive;
        })}
      </ul>
    );
  };

  return (
    <aside className='flex flex-col gap-8'>
      <h2 className='text-3xl font-medium pl-8'>Trilha</h2>
      <VideosList />
    </aside>
  );
}

export default MyCoursesAside;
