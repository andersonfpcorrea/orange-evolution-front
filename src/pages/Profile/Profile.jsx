import { useContext, useState } from "react";
import AppContext from "../../context/context";
import Button from "../../components/Button/Button";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";
import EditProfile from "../../components/EditProfile/EditProfile";
import Animate from "../../components/Animate/Animate";

function Profile() {
  const [view, setView] = useState("card");
  const {
    user,
    roadmaps: { roadmaps },
  } = useContext(AppContext);

  return (
    <div className="max-w-4xl">
      <BackNavArrow />
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-medium">
          {view === "card" ? "Meu perfil" : "Editar perfil"}
        </h2>

        {view === "card" ? (
          <Animate id="1">
            <ProfileCard user={user} callback={() => setView("form")} />
          </Animate>
        ) : (
          <Animate id="2">
            <EditProfile user={user} roadmaps={roadmaps} />
          </Animate>
        )}

        <div className="flex justify-between">
          <Button
            text="Cancelar"
            outline
            onClick={() => setView("card")}
            className={view === "card" ? "invisible" : ""}
          />
          <Button
            text={view === "card" ? "Editar" : "Salvar"}
            onClick={
              view === "card" ? () => setView("form") : () => setView("card")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
