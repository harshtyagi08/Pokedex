import './Search.css';
function Search(){
   return(
    <div className='search'>
         <input
         id='pokemon-name-search'
         type="text"
         placeholder="Pokemon Name..."
         />
    </div> 
   );
}

export default Search;