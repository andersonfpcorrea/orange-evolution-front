import {useState} from 'react';
import SearchResults from './searchResults';
import './searchBar.css';


function SearchBar() {
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const { value } = e.target;

    if (!value) {
      setData([]);
      return;
    }

    const urlCourses = `https://orange-evolution.up.railway.app/courses?q=${value}`

    fetch(urlCourses)
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }

  return (
    <div className="container">
      <form>
          <label htmlFor="search">Boas vindas, Lia</label>
          <input 
              name="search" 
              id="search" 
              placeholder="Procure mais conteúdos aqui"
              onChange={handleInputChange}
          />
      </form>
      <SearchResults data={data}/>
      
    </div>
  )
}
 

export default SearchBar;
