import { useContext } from 'react';
import AppContext from '../../context/context';
import Button from '../../components/Button/Button';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import BackNavArrow from '../../components/BackNavArrow/BackNavArrow';

function Profile() {
  const { user } = useContext(AppContext);

  return (
    <div className='max-w-4xl'>
      <BackNavArrow />
      <div className='flex flex-col gap-8'>
        <h2 className='text-3xl font-medium'>Meu perfil</h2>
        <ProfileCard user={user} />
        <div className='flex justify-around'>
          <Button text='Cancelar' outline={true} />
          <Button text='Editar' />
        </div>
      </div>
    </div>
  );
}

export default Profile;
