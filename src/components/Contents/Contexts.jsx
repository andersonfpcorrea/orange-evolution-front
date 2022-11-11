import Card from "../Card/Card";

function Contents({ heading, type, data }) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">{heading}</h2>
      <div className="flex gap-3 flex-wrap w-[50rem]">
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
