// import style from './VideoPlayer.module.css';
import { useContext } from "react";
import { BsYoutube } from "react-icons/bs";
import AppContext from "../../context/context";
import OrangeLogo from "../../assets/black-logo.jpg";
import Animate from "../Animate/Animate";

function VideoPlayer({ video }) {
  const videoID = video.url.slice(video.url.indexOf("=") + 1);
  const { user } = useContext(AppContext);

  function Player() {
    return (
      <div>
        <iframe
          className="w-[55vw] h-[30vw]"
          style={{ borderRadius: "1rem", margin: "-10px" }}
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  function InfoCard() {
    return (
      <div className="flex gap-4">
        <div className="h-16 w-16 rounded-full grid place-items-center bg-evolution after:block after:absolute after:bg-white after:h-14 after:w-14 after:rounded-full">
          <img
            src={OrangeLogo}
            alt={`${video.author} logo`}
            className="h-12 w-12 rounded-full isolate z-10"
          />
        </div>
        <div className="flex flex-col gap justify-around">
          <h3 className="text-2xl font-medium">{video.course}</h3>
          <div className="flex gap-2 items-center">
            <p className="text-evolutionGrey font-medium">{video.author}</p>
            <BsYoutube fill="red" />
          </div>
        </div>
      </div>
    );
  }

  function OrangeJuiceLinks() {
    const paragraphs = [
      "🍊 Veja os Podcasts no ",
      "🍊 Ouça os Podcasts no ",
      "🍊 Ouça os Podcasts na ",
      "🍊 Participe da comunidade no ",
      "🍊 Siga-nos no ",
    ];
    const anchors = [
      { href: "https://twitch.tv/orangejuice_tech", text: "Twitch" },
      {
        href: "https://open.spotify.com/show/5zy6DpF8V3N8rBbWO7OE79",
        text: "Spotify",
      },
      {
        href: "https://podcasts.apple.com/br/podcast/orange-juice/id1567845573",
        text: "Apple Podcast",
      },
      { href: "https://discord.gg/orangejuicetech", text: "Discord!" },
      { href: "https://instagram.com.br/orangejuicetech", text: "Instagram" },
    ];

    return (
      <div className="flex flex-col">
        {paragraphs.map((el, i) => (
          <p key={anchors[i].text}>
            {el}
            <a href={anchors[i].href} className="text-evolution underline">
              {anchors[i].text}
            </a>
          </p>
        ))}
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-12">
      <h2 className="text-3xl font-medium">{user.currentRoadmap}</h2>
      <div className="flex flex-col gap-8">
        <Animate id={video.id} className="flex items-start">
          <Player />
        </Animate>
        <div className="flex flex-col gap-6">
          <InfoCard />
          <hr className="w-full" />
          <OrangeJuiceLinks />
        </div>
      </div>
    </section>
  );
}

export default VideoPlayer;
