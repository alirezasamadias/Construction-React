// Components
import SearchBox from '../Search-Box/Search-Box';
// Css
import './Undefined.css';

function Undefined() {
  const submitHandler = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <div className='undefined container'>
      <section>
        <h2 className='title-md'>need a new search?</h2>
        <p>If you didn`t find what you were looking for, try a new search!</p>
      </section>

      <SearchBox event={submitHandler}/>

      <span className='subline'></span>

      <h3 className='title-md'>nothing found</h3>
    </div>
  );
}

export default Undefined;