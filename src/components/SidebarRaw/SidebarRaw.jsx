import logo from "../../assets/logo.png";

function SidebarRaw() {
  return (
    <nav
      className={`min-[960px]:flex flex-row min-[960px]:flex-col gap-12 items-center w-full bg-evolution text-white "min-[960px]:w-24 min-[1070px]:w-80
      h-24 min-[960px]:h-full text-xl min-[960px]:py-[4.5rem] max-[959px]:bottom-0 max-[959px]:z-10 max-[959px]:fixed`}
    >
      <img
        src={logo}
        alt="Orange Juice logo"
        className="w-14 min-[1070px]:w-32 max-[959px]:hidden"
      />
      <p className="p-8 text-lg">
        Explore conhecimentos que estão transformando indústrias, negócios e
        vidas através de trilhas gratuitas em Desenvolvimento, UX/UI Design e
        QA!
      </p>
    </nav>
  );
}

export default SidebarRaw;
