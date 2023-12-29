import { Link } from 'react-router-dom';
// Images
import BlogPost01 from '../../Assets/Images/Blog-Post-01.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
import BlogPost03 from '../../Assets/Images/Blog-Post-03.jpg';
// Hooks
import useTab from '../../Hooks/useTab';
// Css
import './Tab.css';

// Fake Server
const popularItems = [
  {
    id: 1,
    link: '/article03',
    image: BlogPost03,
    title: 'future proofing a modern home',
    date: 'december 6th, 2015'
  },

  {
    id: 2,
    link: '/article01',
    image: BlogPost01,
    title: 'redeveloping florida’s remote southern coast',
    date: 'december 7th, 2015'
  },
  
  {
    id: 3,
    link: '/article02',
    image: BlogPost02,
    title: 'how We manage large construction projects',
    date: 'december 7th, 2015'
  },
];

const recentItems = [
  {
    id: 1,
    link: '/article01',
    image: BlogPost01,
    title: 'redeveloping florida’s remote southern coast',
    date: 'december 7th, 2015'
    
  },

  {
    id: 2,
    link: '/article02',
    image: BlogPost02,
    title: 'how We manage large construction projects',
    date: 'december 7th, 2015'
  },
  
  {
    id: 3,
    link: '/article03',
    image: BlogPost03,
    title: 'future proofing a modern home',
    date: 'december 6th, 2015'
  },
];

function Tab() {
  // tab
  useTab();

  return (
    <div className='tab tab-articles'>
      <ul className='tab-list'>
        <li data-target='popular' className='tab-item current-item'>popular</li>
        <li data-target='recent' className='tab-item'>recent</li>
      </ul>

      {/* popular */}
      <ul data-target='popular' className='tab-target'>
        {popularItems.map(item => {
          const {id,link,image,title,date} = item;

          return (
            <div key={id}>
              <li className='tab-list-item'>
                <Link to={link}>
                  <img src={image} alt='Blog Post' className='item-img img-filter'/>
                </Link>

                <div>
                  <h3><Link to={link} className='title-sm text-link'>{title}</Link></h3>

                  <p className='post-info'>{date}</p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>

      {/* recent */}
      <ul data-target='recent' className='tab-target'>
        {recentItems.map(item => {
          const {id,link,image,title,date} = item;

          return (
            <div key={id}>
              <li className='tab-list-item'>
                <Link to={link}>
                  <img src={image} alt='Blog Post' className='item-img img-filter'/>
                </Link>

                <div>
                  <h3><Link to={link} className='title-sm text-link'>{title}</Link></h3>

                  <p className='post-info'>{date}</p>
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Tab;