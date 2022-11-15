import { BsYoutube } from "react-icons/bs";

function VideoInfoCard({ thumb, author, title }) {
  return (
    <div className="flex gap-4 relative">
      <div className="h-16 w-16 rounded-full grid place-items-center bg-evolution after:block after:absolute after:bg-white after:h-14 after:w-14 after:rounded-full">
        <img
          src={thumb}
          alt={`${author} logo`}
          className="h-12 w-12 rounded-full isolate z-10"
        />
      </div>
      <div className="flex flex-col gap justify-around">
        <h3 className="text-xl min-[1150px]:text-2xl font-medium">{title}</h3>
        <div className="flex gap-2 items-center">
          <p className="text-evolutionGrey font-medium text-sm min-[1150px]:text-base">
            {author}
          </p>
          <BsYoutube fill="red" />
        </div>
      </div>
    </div>
  );
}

export default VideoInfoCard;
