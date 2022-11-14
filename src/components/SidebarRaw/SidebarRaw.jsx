import PropTypes from "prop-types";
// import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function SidebarRaw({ view }) {
  const myCourses = view === "myCourses";

  // const content = [
  //   "Home",
  //   "Explore conteúdos",
  //   "Explore Trilhas",
  //   "Meus cursos",
  //   "Meu perfil",
  // ];
  // const routes = ["login", "signup", "roadmaps", "myCourses", "profile"];

  return (
    <nav
      className={`min-[960px]:flex flex-row min-[960px]:flex-col gap-12 items-center w-full bg-evolution text-white ${
        myCourses ? "min-[960px]:w-24" : "min-[960px]:w-24 min-[1070px]:w-80"
      } h-24 min-[960px]:h-full text-xl min-[960px]:py-[4.5rem] max-[959px]:bottom-0 max-[959px]:z-10 max-[959px]:fixed`}
    >
      <img
        src={logo}
        alt="Orange Juice logo"
        className={`${
          myCourses ? `w-14` : `w-14 min-[1070px]:w-32`
        } max-[959px]:hidden`}
      />
      <p className="p-8 text-lg">
        Explore conhecimentos que estão transformando indústrias, negócios e
        vidas através de trilhas gratuitas em Desenvolvimento, UX/UI Design e
        QA!
      </p>
    </nav>
  );
}

SidebarRaw.propTypes = {
  view: PropTypes.oneOf(["login", "signup", "userTests", "testResult"])
    .isRequired,
};

export default SidebarRaw;
