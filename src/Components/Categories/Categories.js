import { Link } from 'react-router-dom';

// Fake Server
const data = ['architecture','buildings','construction','engineering','marketing','news'];

function Categories() {
  return (
    <section className='categories'>
      <h2 className='title-md'>categories</h2>
      
      <ul className='list'>
        {data.map((category , index) => {
          return (
            <li className='list-item' key={index + 1}>
              <Link to={`/category#${category}`}  className='list-item-link text-link'>
                <i className='icon-right'></i>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Categories;