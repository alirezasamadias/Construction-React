import { Link } from 'react-router-dom';
// Images
import Project01 from '../../Assets/Images/Project-01.jpg';
import Project02 from '../../Assets/Images/Project-02.jpg';
import Project03 from '../../Assets/Images/Project-03.jpg';
import Project04 from '../../Assets/Images/Project-04.jpg';
// Css
import './Recent-Works.css';

// Fake Server
const data = [
  {
    id: 2,
    image: Project01,
    alt: 'Project',
    link: '/project01'
  },

  {
    id: 3,
    image: Project02 ,
    alt: 'Project' ,
    link: '/project02'
  },

  {
    id: 4,
    image: Project03 ,
    alt: 'Project' ,
    link: '/project03'
  },

  {
    id: 5,
    image: Project04 ,
    alt: 'Project' ,
    link: '/project04'
  }
];

function RecentWorks() {
  return (
    <section className='recent-works'>
      <h2 className='title-md'>recent works</h2>
      
      <div className='gallery'>
        {data.map((item) => {
          const {id,image,alt,link} = item;
          
          return ( 
            <Link to={link} key={id}>
              <img src={image} alt={alt} className='gallery-img img-filter'/>
            </Link> 
          );
        })}
      </div>
    </section>
  );
}
  
export default RecentWorks;