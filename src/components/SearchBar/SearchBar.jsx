import { useContext } from 'react';
import AppContext from '../../context/context';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  const {
    user: { firstName },
  } = useContext(AppContext);

  return (
    <div className='flex flex-col gap-8'>
      <h2 className='text-2xl'>
        Boas vindas, <span className='font-medium'>{firstName}</span>
      </h2>
      <label htmlFor='search' className='relative'>
        <FiSearch className='absolute top-[1.1rem] left-6 h-5 w-5' />
        <input
          type='text'
          id='search'
          className='bg-evolutionIce w-[50rem] h-14 rounded-2xl px-16'
          placeholder='Procure mais conteúdos'
        />
      </label>
    </div>
  );
}

export default SearchBar;
