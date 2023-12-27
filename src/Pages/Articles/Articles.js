// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import SubHero from '../../Components/SubHero/SubHero';
import ArticleItems from '../../Parts/Article-Items/Article-Items';
import CallToAction from '../../Parts/Call-To-Action/Call-To-Action';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Articles.css';

function Articles() {
  // title
  useTabTitle('Articles');
  // current page
  useCurrentPage();

  return (
  <>
    <Loader/>
    <main id='main' className='articles'>
      <Hero
        title='construction articles'
        content='thought leaders in modern residential & commercial construction'
      />
      <SubHero/>
      <ArticleItems/>
      <CallToAction/>
    </main>
  </>
  );
}

export default Articles;