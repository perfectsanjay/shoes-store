import React ,{useState} from 'react';
import './Search.style.scss'
import data from "../pages/categoryPage/utils.data";



const Search = ({toggleSearch}) =>{
    const [query,setQuery] = useState("");
    const [results,setResults] = useState(data);

    const handleSearchChange = (e) => {
       const searchTerm  = e.target.value.toLowerCase()
        setQuery(searchTerm);

      const  filterData  = data.flatMap((product_data) => 
        

             product_data.items).filter((item) => item.name.toLowerCase().includes(searchTerm))
   
    setResults(filterData)
    console.log(results)
}
    return(
        
        <div className="search-overlay">
            <div className="input-container">
            <input type="text" value={query} className="search-box" placeholder="Search for"  onChange={handleSearchChange}/>
            </div> 
        <div className="search-img">
        {query && results.map((item)=>(
            <div className="img-category-search" key={item.id}>
            <img className="cat-imge" src={item.imageUrl} alt={item.alt} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
         )
        )
        }
        </div>
        
        <button className="search-close" onClick={toggleSearch}>X</button>
        </div>
        

    )
    
}

export default Search;