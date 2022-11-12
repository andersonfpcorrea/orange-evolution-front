import { useContext, useState } from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import AppContext from "../../context/context";
import MyCoursesAside from "../MyCoursesAside/MyCoursesAside";

function MyCoursesMain() {
  const { currentRoadmapVideos } = useContext(AppContext);
  const { videos } = currentRoadmapVideos;
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="flex flex-col w-full min-[1150px]:flex-row min-[1150px]:justify-between">
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
