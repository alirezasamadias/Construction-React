// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Values.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-home',
    title: 'great services',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
  },
    
  {
    id: 2,
    icon: 'icon-setting',
    title: 'highest standards',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
  },
    
  {
    id: 3,
    icon: 'icon-users',
    title: 'professional team',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
  },
  
  {
    id: 4,
    icon: 'icon-bulb',
    title: 'creative solutions',
    content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
  },
];

function Values() {
  return (
    <div className='values'>
      <div className='container'>
        <HedSection
          title='our core values'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,icon,title,content} = item;

            return (
              <section key={id} className='loop-card'>
                <div className='parent-icon'>
                  <i className={`loop-icon ${icon}`}></i>
                  <h3 className='title-sm subline'>{title}</h3>
                </div>
                
                <p>{content}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;