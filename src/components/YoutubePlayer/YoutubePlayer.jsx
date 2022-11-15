function YoutubePlayer({ videoID }) {
  return (
    <div className="w-full">
      <iframe
        className="w-full h-[50vw] min-[959px]:h-[40vw] min-[1150px]:w-[51vw] min-[1150px]:h-[25vw] xl:w-[55vw] xl:h-[30vw] rounded-2xl"
        src={`https://www.youtube.com/embed/${videoID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default YoutubePlayer;
