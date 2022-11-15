import { useContext, useState, useEffect } from "react";
import axios from "axios";
import AppContext from "../../context/context";
import Button from "../../components/Button/Button";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import BackNavArrow from "../../components/BackNavArrow/BackNavArrow";
import EditProfile from "../../components/EditProfile/EditProfile";
import Animate from "../../components/Animate/Animate";

function Profile() {
  const [view, setView] = useState("card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const {
    user,
    setUser,
    roadmaps: { roadmaps },
  } = useContext(AppContext);

  useEffect(() => {
    if (firstName && lastName && email && password && roadmap) {
      axios
        .put(
          `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_URL}/users`,
          {
            firstName,
            lastName,
            email,
            password,
            roadmap,
            id: user.id,
          }
        )
        .then((res) => {
          console.log(res);
          setUser(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [view]);

  return (
    <Animate className="w-full relative">
      <BackNavArrow />
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-3xl font-medium">
          {view === "card" ? "Meu perfil" : "Editar perfil"}
        </h2>

        {view === "card" ? (
          <Animate id="1">
            <ProfileCard user={user} callback={() => setView("form")} />
          </Animate>
        ) : (
          <Animate id="2">
            <EditProfile
              user={user}
              roadmaps={roadmaps}
              handlers={{
                setFirstName,
                setLastName,
                setEmail,
                setPassword,
                setRoadmap,
              }}
              values={(firstName, lastName, email, password, roadmap)}
            />
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
            type="submit"
            onClick={
              view === "card" ? () => setView("form") : () => setView("card")
            }
          />
        </div>
      </div>
    </Animate>
  );
}

export default Profile;
