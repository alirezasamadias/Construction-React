import { Link } from 'react-router-dom';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Construction.css';

// Fake Server
const data = [
  { 
    id: 1,
    frontIcon: 'icon-building',
    frontTitle: 'buildings',
    frontContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    backTitle: 'art fully crafted',
    backContent:'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
  },
  
  {
    id: 2,
    frontIcon: 'icon-refresh',
    frontTitle: 'renovate',
    frontContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    backTitle: 'freshly new',
    backContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
  },
  
  {
    id: 3,
    frontIcon: 'icon-home',
    frontTitle: 'construct',
    frontContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    backTitle: 'perfect lines',
    backContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
  },
  
  {
    id: 4,
    frontIcon: 'icon-truck',
    frontTitle: 'exclusive',
    frontContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    backTitle: 'planning',
    backContent: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
  },
];

function Construction() {
  return (
    <div className='construction'>
      <div className='container'>
        <HedSection
          title='specialists in modern construction'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.'
        />

        <div className='parent-items'>
          {data.map(item=>{
            const {id,frontIcon,frontTitle,frontContent,backTitle,backContent} = item;

            return (
              <div key={id} className='card-parent'>
                <div className='rotatory-card'>
                  <section className='card-front'>
                    <i className={`card-front-icon ${frontIcon}`}></i>
                    <h3 className='title-md'>{frontTitle}</h3>
                    <p>{frontContent}</p>
                  </section>

                  <section className='card-back'>
                    <h4 className='title-sm'>{backTitle}</h4>
                    <p>{backContent}</p>
                    <Link to='/get-quote' className='btn btn-secondary'>get a quote</Link>
                  </section>
                </div>
              </div>
            );
          })}  
        </div>
      </div>
    </div>
  );
}

export default Construction;