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
    <div className='flex w-full gap-8'>
      <div>
        <VideoPlayer video={selectedVideo} />
      </div>
      <div>
        <MyCoursesAside
          selectedVideo={selectedVideo}
          courseList={currentRoadmapVideos}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </div>
  );
}

export default MyCoursesMain;
