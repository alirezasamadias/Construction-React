// Css
import './Inform.css';

// Fake Server
const data = [
  {
    id: 1,
    icon: 'icon-travel',
    number: '3534',
    title: 'planning applications'
  },
  
  {
    id: 2,
    icon: 'icon-building',
    number: '896',
    title: 'completed projects'
  },
  
  {
    id: 3,
    icon: 'icon-users',
    number: '172',
    title: 'trained professional',
  },
  
  {
    id: 4,
    icon: 'icon-globe',
    number: '19',
    title: 'international offices'
  }
];

function Inform() {
  const informNums = document.querySelectorAll('.card-number');

  for (const informNumEl of informNums) {
    informNumEl.textContent = '0';

    const counter = (endNum , numPlus , interval , index)=>{
      let number = 0;
  
      const setNumber = setInterval (()=>{
        number += numPlus;

        if (number >= endNum){
          number = endNum;
          clearInterval(setNumber);
        }

        informNums[index].textContent = number;
      },interval);
    };
    
    window.addEventListener('scroll',()=>{
      if (informNumEl.getBoundingClientRect().bottom <= window.innerHeight && informNumEl.textContent === '0'){
        counter(3534,8,1,0);
        counter(896,2,1,1);
        counter(172,1,10,2);
        counter(19,1,110,3);
      }
    });
  }

  return (
    <div className='inform parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container'>
        <div className='parent-items'>
          {data.map(item => {
            const {id,icon,number,title} = item;

            return (
              <section key={id} className='counter-card'>    
                <i className={`card-icon ${icon}`}></i>
                <h4 className='card-number'>{number}</h4>
                <h3 className='title-sm'>{title}</h3>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Inform;