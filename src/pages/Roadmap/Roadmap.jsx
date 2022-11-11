import Contents from '../../components/Contents/Contexts';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFilters from '../../components/SearchFilters/SearchFilters';

function Roadmap() {
  const filters = [
    {
      name: 'Classe',
      options: ['Hard skill', 'Soft skill'],
    },
  ];
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-8'>
        <SearchBar
          normalText={'Explore Trilhas - '}
          boldText={'Desenvolvimento Full Stack'}
        />
        <SearchFilters filters={filters} />
      </div>
      <Contents />
    </div>
  );
}

export default Roadmap;
