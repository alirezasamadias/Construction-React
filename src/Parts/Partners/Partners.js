// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import Carousel from '../../Components/Carousel/Carousel';
// Css
import './Partners.css';

function Partners() {
  return (
    <div className='partners'>
      <div className='container'>
        <HedSection
          title='trusted partners'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        />
        <Carousel/>
      </div>
    </div>
  );
}

export default Partners;