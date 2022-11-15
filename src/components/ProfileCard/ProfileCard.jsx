import { MdModeEdit } from "react-icons/md";
import Image from "../../assets/cookie-the-pom-gySMaocSdqs-unsplash (1).jpg";

function ProfileCard({ user, callback }) {
  return (
    <figure className="flex flex-col gap-8 border-solid border-[1px] border-evolutionGrey h-[35rem]">
      <div
        className="w-full h-64 relative"
        style={{
          backgroundImage: `url("${Image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="grid place-items-center bg-black rounded-full w-[7.5rem] h-[7.5rem] absolute left-1/2 -translate-x-1/2 bottom-[-3rem]">
          <img
            src={user.photo}
            alt="Lia Sousa"
            className="rounded-full h-28 w-28"
          />
          <MdModeEdit
            className="absolute right-[-1rem] bottom-1 cursor-pointer"
            onClick={callback}
          />
        </div>
      </div>
      <div className="py-4 px-8 flex flex-col gap-8">
        <ul className="flex flex-col gap-4">
          <li>
            <p className="font-medium text-lg">Nome</p>
            <p className="font-medium text-evolutionGrey">{`${user.firstName} ${user.lastName}`}</p>
          </li>
          <li>
            <p className="font-medium text-lg">Progresso</p>
            <p className="font-medium text-evolutionGrey">
              {user.progress}% concluído
            </p>
          </li>
          <li>
            <p className="font-medium text-lg">Minha Trilha</p>
            <p className="font-medium text-evolutionGrey">
              {user.currentRoadmap}
            </p>
          </li>
        </ul>
        <p className="italic text-center text-sm text-evolutionGrey">
          {`Membro da Orange Evolution desde ${new Intl.DateTimeFormat(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          ).format(new Date(user?.createdAt || Date.now()))}`}
        </p>
      </div>
    </figure>
  );
}

export default ProfileCard;
