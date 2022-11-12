import {
  MdHome,
  MdRadar,
  MdComputer,
  MdPerson,
  MdExitToApp,
  MdOutlineListAlt,
} from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

function Sidebar({ setView, view }) {
  const myCourses = view === "myCourses";

  const iconsConditionalClasses = myCourses
    ? "h-8 w-8 transition-all"
    : "max-[1070px]:h-8 max-[1070px]:w-8 max-[1070px]:transition-all";

  const icons = [
    <MdHome key={0} className={iconsConditionalClasses} />,
    <MdRadar key={1} className={iconsConditionalClasses} />,
    <MdOutlineListAlt key={2} className={iconsConditionalClasses} />,
    <MdComputer key={3} className={iconsConditionalClasses} />,
    <MdPerson key={4} className={iconsConditionalClasses} />,
  ];
  const content = [
    "Home",
    "Explore conteúdos",
    "Explore Trilhas",
    "Meus cursos",
    "Meu perfil",
  ];
  const routes = ["home", "explore", "roadmaps", "myCourses", "profile"];

  return (
    <nav
      className={`min-[960px]:flex flex-row min-[960px]:flex-col justify-between items-center w-full bg-evolution text-white ${
        myCourses ? "min-[960px]:w-24" : "min-[960px]:w-24 min-[1070px]:w-80"
      } h-24 min-[960px]:h-full text-xl min-[960px]:py-[4.5rem] max-[959px]:bottom-0 max-[959px]:z-10 max-[959px]:fixed`}
    >
      <div className="flex flex-row min-[960px]:flex-col items-center gap-20 w-full">
        <img
          src={logo}
          alt="Orange Juice logo"
          className={`${
            myCourses ? `w-14` : `w-14 min-[1070px]:w-32`
          } max-[959px]:hidden`}
        />
        <ul className="flex flex-row min-[960px]:flex-col justify-around min-[960px]:gap-6 w-full">
          {content.map((el, i) => {
            const liActive = (
              <li
                key={el}
                className={`cursor-pointer min-[960px]:pl-4 ${
                  !myCourses && "min-[1070px]:pl-12"
                }`}
                onClick={() => setView(routes[i])}
              >
                <motion.div
                  transition={{ duration: 0.5 }}
                  animate={{ scale: 1 }}
                  layoutId="white"
                  className="flex items-center gap-4 max-[959px]:rounded-b-full min-[960px]:rounded-l-3xl py-2 max-[959px]:pt-6 max-[959px]:pb-6 px-6 min-[960px]:pl-4 text-evolution bg-white"
                >
                  {icons[i]}
                  {view !== "myCourses" && (
                    <p className="whitespace-nowrap hidden min-[1070px]:block">
                      {el}
                    </p>
                  )}
                </motion.div>
              </li>
            );
            const liInactive = (
              <li
                key={el}
                className={`flex items-center gap-4 py-2 cursor-pointer ${
                  myCourses && "justify-center"
                } ${
                  !myCourses && "min-[1070px]:pl-16"
                } max-[1070px]:justify-center`}
                onClick={() => setView(routes[i])}
              >
                {icons[i]}
                {view !== "myCourses" && (
                  <p className="hidden min-[1070px]:block">{el}</p>
                )}
              </li>
            );
            return view === routes[i] ? liActive : liInactive;
          })}
        </ul>
      </div>
      <div
        className={`flex items-center gap-4 self-start ${
          myCourses ? "ml-8" : "ml-12"
        } cursor-pointer max-[959px]:hidden`}
      >
        <MdExitToApp className={iconsConditionalClasses} />
        {view !== "myCourses" && <p>Sair</p>}
      </div>
    </nav>
  );
}

export default Sidebar;
