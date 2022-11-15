import { useContext } from "react";
import AppContext from "../../context/context";
import OrangeLogo from "../../assets/black-logo.jpg";
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer";
import VideoInfoCard from "../VideoInfoCard/VideoInfoCard";
import OrangeJuiceLinks from "../OrangeJuiceLinks/OrangeJuiceLinks";

function VideoPlayer({ video }) {
  const videoID = video?.url.slice(video.url.indexOf("=") + 1);
  const { user } = useContext(AppContext);

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-3xl font-medium">{user.currentRoadmap}</h2>
      <div className="flex flex-col gap-8">
        <YoutubePlayer videoID={videoID} />
        <div className="flex flex-col max-[1149px]:pb-4 gap-2 min-[1150px]:gap-6">
          <VideoInfoCard
            thumb={OrangeLogo}
            author={video?.author}
            title={video?.course}
          />
          <hr className="w-full" />
          <OrangeJuiceLinks />
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
