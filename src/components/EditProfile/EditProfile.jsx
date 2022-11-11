import { MdKeyboardBackspace } from "react-icons/md";
import React from "react";

function Profile() {
  return (
    <div>
      <section>
        <div className="fixed top-[-48px] left-[-42px]">
          <MdKeyboardBackspace style={{ width: "24px", height: "24px" }} />
        </div>
        <form>
          <div class="flow-root">
            <label htmlFor="input-name" className="float-left">
              <h2>Nome</h2>
              <input
               className="bg-evolutionIce border-2 border-neutral-400 rounded-md w-[20rem] h-10 rounded-5xl px-5"
                id="input-name"
                placeholder="Lia"
                type="name"
              />
            </label>
            <label htmlFor="input-name" className="float-right">
              <h2>Sobrenome</h2>
              <input
                className="bg-evolutionIce border-2 border-neutral-400 rounded-md w-[20rem] h-10 rounded-5xl px-5"
                id="input-name"
                placeholder="Souza"
                type="name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="input-email">
              <h2>Email</h2>
              <input
                className="bg-evolutionIce border-2 border-neutral-400 rounded-md w-[45rem] h-10 rounded-5xl px-5"
                id="input-email"
                placeholder="liasouza@email.com"
                type="email"
              />
            </label>
          </div>
          <label htmlFor="input-password">
            <h2>Senha</h2>
            <input
              className="bg-evolutionIce border-2 border-neutral-400 rounded-md w-[45rem] h-10 rounded-5xl px-5"
              id="input-password"
              placeholder="liasouza123"
              type="password"
              name="password"
            />
          </label>
          <div>
            <h2>Sua Trilha</h2>
            <select className="bg-evolutionIce border-2 border-neutral-400 rounded-md w-[20rem] h-10 rounded-5xl px-4">
              <option> Dev FullStack </option>
              <option> UX/UI </option>
              <option> Quality Assurance </option>
            </select>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Profile;