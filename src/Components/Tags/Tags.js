import { Link } from 'react-router-dom';
// Css
import './Tags.css';

// Fake Server
const data = ['construction','honored','house building','how to build','marketing plan'];

function Tags() {
  return (
    <section className='tags'>
      <h2 className='title-md'>tags</h2>
      
      {data.map((tag , index) => {
        return (
          <Link
            to={`/category#${tag.replace(/ /g,'-')}`}
           
            key={index + 1}
            className='tag-link'>{tag}</Link>
        );
      })}
    </section>
  );
}

export default Tags;