// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import SubHero from '../../Components/SubHero/SubHero';
import Accordion from '../../Parts/Accordion/Accordion';
import Partners from '../../Parts/Partners/Partners';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Services.css';

function Services() {
  // title
  useTabTitle('Services');
  // current page
  useCurrentPage();

  return (
    <>
      <Loader/>
      <main id='main' className='services'>
      <Hero 
        title='construction services' 
        content='we build inspiring residential & commercial spaces'
      />
      <SubHero/>
      <Accordion/>
      <Partners/>
      <CallToActionForm/>
    </main>
    </>
  );
}

export default Services;