import Card from "../Card/Card";

function Contents({ heading, type, data }) {
  const coursesCardsStyle = "flex gap-3 flex-wrap w-full justify-around";
  const roadmapCardsStyle =
    "flex gap-3 flex-wrap w-full justify-around sm:grid sm:grid-cols-2";

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">{heading}</h2>
      <div
        className={type === "course" ? coursesCardsStyle : roadmapCardsStyle}
      >
        {data?.map((datum) => (
          <Card
            key={datum.id}
            course={type === "course" ? datum : null}
            roadmap={type === "roadmap" ? datum : null}
          />
        ))}
      </div>
    </div>
  );
}

export default Contents;
