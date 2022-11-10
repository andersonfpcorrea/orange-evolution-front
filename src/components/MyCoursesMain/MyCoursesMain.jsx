import VideoPlayer from '../VideoPlayer/VideoPlayer';
import AppContext from '../../context/context';
import MyCoursesAside from '../MyCoursesAside/MyCoursesAside';
import { useContext } from 'react';
import { useState } from 'react';

function MyCoursesMain() {
  const { currentRoadmapVideos } = useContext(AppContext);
  const { videos } = currentRoadmapVideos;
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className='flex w-full'>
      <div className='grow-3'>
        <VideoPlayer video={selectedVideo} />
      </div>
      <div className='grow-1'>
        <MyCoursesAside
          courseList={currentRoadmapVideos}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </div>
  );
}

export default MyCoursesMain;
