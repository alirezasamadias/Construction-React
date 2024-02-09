import { useState } from 'react';
// Css
import './Search-Box.css';

function SearchBox(props) {
  const {event} = props;
  
  const [searchValue , setSearchValue] = useState();

  const changeHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase().replace(/ /g,'-'));
  };

  return (
    <form action={`/category#${searchValue}`} method='get' className='search-box' onSubmit={event}>
      <input
        type='search'
        placeholder='Search...'
        className='form-item' id='search-input'
        required
        onChange={changeHandler}
      />
      
      <div className='btn-search'>
        <label htmlFor='submit' className='icon-search'></label>
        <input
          type='submit'
          id='submit'
          value=' '
          className='submit-search'
        />
      </div>
    </form>
  );
}

export default SearchBox;