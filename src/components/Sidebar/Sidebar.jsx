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
  const icons = [
    <MdHome key={0} />,
    <MdRadar key={1} />,
    <MdOutlineListAlt key={2} />,
    <MdComputer key={3} />,
    <MdPerson key={4} />,
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
    <nav className="flex flex-col justify-between items-center bg-evolution text-white h-full text-xl py-[4.5rem]">
      <div className="flex flex-col items-center gap-20 w-full">
        <img src={logo} alt="Orange Juice logo" className="w-32 h-24" />
        <ul className="flex flex-col gap-6 w-full">
          {content.map((el, i) => {
            const liActive = (
              <li
                key={el}
                className="cursor-pointer"
                onClick={() => setView(routes[i])}
              >
                <motion.div
                  layoutId="white"
                  className="flex items-center gap-4 rounded-l-3xl ml-12 py-2 px-4 text-evolution bg-white"
                >
                  {icons[i]}
                  <p>{el}</p>
                </motion.div>
              </li>
            );
            const liInactive = (
              <li
                key={el}
                className="flex items-center gap-4 ml-12 py-2 px-4 w-full cursor-pointer"
                onClick={() => setView(routes[i])}
              >
                {icons[i]}
                <p>{el}</p>
              </li>
            );
            return view === routes[i] ? liActive : liInactive;
          })}
        </ul>
      </div>
      <div className="flex items-center gap-4 self-start ml-12 cursor-pointer">
        <MdExitToApp />
        <p>Sair</p>
      </div>
    </nav>
  );
}

export default Sidebar;
