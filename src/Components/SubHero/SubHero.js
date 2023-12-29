import { Link } from 'react-router-dom';
// Css
import './SubHero.css';

function SubHero() {
  return (
    <section className='subhero'>
      <h2 className='title-md'>do you have a construction project we can help with?</h2>
      
      <Link to='/get-quote' className='btn btn-secondary'>get a free quote</Link>
    </section>
  );
}

export default SubHero;