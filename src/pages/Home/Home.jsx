import Progress from '../../components/Progress/Progress';
import Recommended from '../../components/Recommended/Recommended';
import SearchBar from '../../components/SearchBar/SearchBar';

function Home() {
  return (
    <div className='flex flex-col gap-12'>
      <SearchBar />
      <Progress />
      <Recommended />
    </div>
  );
}

export default Home;
