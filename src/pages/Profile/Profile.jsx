import { useContext } from 'react';
import AppContext from '../../context/context';
import Button from '../../components/Button/Button';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import BackNavArrow from '../../components/BackNavArrow/BackNavArrow';
import EditProfile from '../../components/EditProfile/EditProfile';
import { useState } from 'react';

function Profile() {
  const [view, setView] = useState('card');
  const { user } = useContext(AppContext);

  return (
    <div className='max-w-4xl'>
      <BackNavArrow />
      <div className='flex flex-col gap-8'>
        <h2 className='text-3xl font-medium'>
          {view === 'card' ? 'Meu perfil' : 'Editar perfil'}
        </h2>
        {view === 'card' ? <ProfileCard user={user} /> : <EditProfile />}

        <div className='flex justify-around'>
          <Button
            text='Cancelar'
            outline={true}
            onClick={() => setView('card')}
          />
          <Button
            text={view === 'card' ? 'Editar' : 'Salvar'}
            onClick={() => setView('form')}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
