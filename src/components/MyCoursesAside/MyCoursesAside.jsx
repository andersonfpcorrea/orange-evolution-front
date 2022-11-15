import { AiOutlineMenu } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";
import formatTimeString from "../../utils/formatTimeString";
import formatStringSize from "../../utils/formatStringSize";

function MyCoursesAside({ selectedVideo, courseList, setSelectedVideo }) {
  const { courses } = courseList;

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
      <ul className="flex flex-col gap-2 min-[1150px]:gap-0 text-base min-[960px]:text-lg min-[1150px]:text-xs">
        {courses?.map((video) => {
          const liActive = (
            <li key={video.id}>
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
                    <p className="font-medium  2xl:text-base">
                      {formatStringSize(video.course)}
                    </p>
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
            <li key={video.id}>
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
    <aside className="pt-4 min-[360px]:p-4 min-[1150px]:p-0 flex flex-col gap-4 min-[1150px]:gap-12 ">
      <h2 className="text-2xl font-medium min-[1150px]:pl-8">Trilha</h2>
      <VideosList />
    </aside>
  );
}

export default MyCoursesAside;
