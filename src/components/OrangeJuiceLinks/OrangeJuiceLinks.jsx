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
    <div className="flex flex-col max-[1149px]:px-2 max-[1149px]:text-sm">
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

export default OrangeJuiceLinks;
