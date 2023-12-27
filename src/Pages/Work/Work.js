// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import SubHero from '../../Components/SubHero/SubHero';
import Archive from '../../Parts/Archive/Archive';
import Partners from '../../Parts/Partners/Partners';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Work.css';

function Work() {
  // title
  useTabTitle('Work');
  // current page
  useCurrentPage();
  
  return (
  <>
    <Loader/>
    <main id='main' className='work'>
      <Hero 
        title='our recent work' 
        content='inspired by modern living & Cutting-Edge construction techniques'
      />
      <SubHero/>
      <Archive/>
      <Partners/>
      <CallToActionForm/>
    </main>
  </>
  );
}

export default Work;