// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import Slider from '../../Components/Slider/Slider';
// Css
import './Parallax.css';

function Parallax() {
  return (
    <div className='parallax parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container container-sm'>
        <HedSection title='our home owners say'/>
        <Slider/>
      </div>
    </div>
  );
}

export default Parallax;