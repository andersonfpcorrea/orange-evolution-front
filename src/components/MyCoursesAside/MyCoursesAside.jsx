import { AiOutlineMenu } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import formatTimeString from "../../utils/formatTimeString";

function MyCoursesAside({ selectedVideo, courseList, setSelectedVideo }) {
  const { videos } = courseList;

  const activeStyle =
    "bg-evolution bg-opacity-40 rounded-lg min-[1150px]:rounded-l-full opacity-80";

  const listIconStyle = {
    height: "1rem",
    width: "1rem",
    fill: "white",
  };

  const listIconDivClasses =
    "h-8 w-8 bg-evolution rounded-xl grid place-items-center";

  function VideosList() {
    return (
      <ul className="flex flex-col text-lg gap-2 min-[1150px]:gap-0 min-[1150px]:text-xs">
        {videos.map((video) => {
          const liActive = (
            <li>
              <button
                type="button"
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="w-full"
              >
                <motion.div
                  layoutId="selected"
                  className={`flex items-center gap-6 min-[1150px]:gap-2 py-2 pl-3 ${activeStyle}`}
                >
                  <div className={listIconDivClasses}>
                    <AiOutlineMenu style={listIconStyle} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="font-medium  2xl:text-base">{video.course}</p>
                    <div className="flex items-center gap-2">
                      <span>{video.type}</span>
                      <BsDot />
                      <span>{formatTimeString(video.length)}</span>
                    </div>
                  </div>
                </motion.div>
              </button>
            </li>
          );

          const liInactive = (
            <li>
              <button
                type="button"
                className="flex items-center gap-6 min-[1150px]:gap-2 py-2 pl-3 w-full"
                key={video.id}
                onClick={() => setSelectedVideo(video)}
              >
                <div className={listIconDivClasses}>
                  <AiOutlineMenu style={listIconStyle} />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="font-medium  2xl:text-base">{video.course}</p>
                  <div className="flex items-center gap-2">
                    <span>{video.type}</span>
                    <BsDot />
                    <span>{formatTimeString(video.length)}</span>
                  </div>
                </div>
              </button>
            </li>
          );

          return selectedVideo.id === video.id ? liActive : liInactive;
        })}
      </ul>
    );
  }

  return (
    <aside className="p-4 min-[1150px]:p-0 flex flex-col min-[1150px]:gap-12 ">
      <h2 className="hidden min-[1150px]:block text-2xl font-medium pl-8">
        Trilha
      </h2>
      <VideosList />
    </aside>
  );
}

export default MyCoursesAside;
