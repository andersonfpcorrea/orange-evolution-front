import { useContext } from 'react';
import AppContext from '../../context/context';
import Contents from '../../components/Contents/Contexts';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFilters from '../../components/SearchFilters/SearchFilters';

function Explore() {
  const filters = [
    {
      name: 'Classe',
      options: ['Hard skill', 'Soft skill'],
    },
    {
      name: 'Formato',
      options: ['Apostila', 'Artigo', 'Curso', 'Livro', 'Video', 'Live'],
    },
    {
      name: 'Duração',
      options: ['Até 10 min', 'Até 60 min', '+ 1 hora'],
    },
  ];

  const {
    currentRoadmapCourses: { courses },
  } = useContext(AppContext);
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-8'>
        <SearchBar
          normalText={'Explore conteúdos - '}
          boldText={'Desenvolvimento Full Stack'}
        />
        <SearchFilters filters={filters} />
      </div>
      <Contents
        heading='Repositório de Conteúdos'
        type={'course'}
        data={courses}
      />
    </div>
  );
}

export default Explore;
