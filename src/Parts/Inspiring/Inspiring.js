// Images
import Materials from '../../Assets/Images/Materials.webp';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
// Css
import './Inspiring.css';

function Inspiring() {
  return (
    <div className='inspiring'>
      <div className='container'>
        <HedSection
          title='building inspiring spaces'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.'
        />

        <img src={Materials} alt='Construction Materials' className='inspiring-img'/>
      </div>
    </div>
  );
}

export default Inspiring;