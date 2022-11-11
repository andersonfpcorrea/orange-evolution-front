import Image from '../../assets/cookie-the-pom-gySMaocSdqs-unsplash (1).jpg';
import Lia from '../../assets/Lia.jpeg';
import { MdModeEdit } from 'react-icons/md';

function ProfileCard({ user }) {
  return (
    <figure className='flex flex-col gap-8 border-solid border-[1px] border-evolutionGrey h-[35rem]'>
      <div
        className='w-full h-64 relative'
        style={{
          backgroundImage: `url("${Image}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='grid place-items-center bg-black rounded-full w-[7.5rem] h-[7.5rem] absolute left-1/2 -translate-x-1/2 bottom-[-3rem]'>
          <img src={Lia} alt={'Lia Sousa'} className='rounded-full h-28 w-28' />
          <MdModeEdit className='absolute right-[-1rem] bottom-1' />
        </div>
      </div>
      <div className='py-4 px-8 flex flex-col gap-8'>
        <ul className='flex flex-col gap-4'>
          <li>
            <p className='font-medium text-lg'>Nome</p>
            <p className='font-medium text-evolutionGrey'>{`${user.firstName} ${user.lastName}`}</p>
          </li>
          <li>
            <p className='font-medium text-lg'>Progresso</p>
            <p className='font-medium text-evolutionGrey'>25% concluído</p>
          </li>
          <li>
            <p className='font-medium text-lg'>Minha Trilha</p>
            <p className='font-medium text-evolutionGrey'>
              Desenvolvimento Full-Stack
            </p>
          </li>
        </ul>
        <p className='italic text-center text-sm text-evolutionGrey'>
          Membro da Orange Evolution desde outubro de 2020
        </p>
      </div>
    </figure>
  );
}

export default ProfileCard;
