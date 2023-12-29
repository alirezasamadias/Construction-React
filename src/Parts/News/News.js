// Images
import BlogPost01 from '../../Assets/Images/Blog-Post-01.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
import BlogPost03 from '../../Assets/Images/Blog-Post-03.jpg';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import PostItem from '../../Components/Post-Item/Post-Item';
import BtnHide from '../../Components/Btn-Hide/Btn-Hide';
// Css
import './News.css';

// Fake Server
const data = [
  {
    id: 1,
    image: BlogPost01,
    alt: 'Blog Post',
    link: '/article01',
    title: 'redeveloping florida’s remote southern coast',
    date: 'december 7th, 2015',
    content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed.',
    categories: ['commercial']
  },

  {
    id: 2,
    image: BlogPost02,
    alt: 'Blog Post',
    link: '/article02',
    title: 'how We manage large construction projects',
    date: 'december 7th, 2015',
    content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed.',
    categories: ['residential']
  },

  {
    id: 3,
    image: BlogPost03,
    alt: 'Blog Post',
    link: '/article03',
    title: 'future proofing a modern home',
    date: 'december 7th, 2015',
    content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed.',
    categories: ['commercial']
  }
];

function News() {
  return (
    <div className='news'>
      <div className='container'>
        <HedSection title='Latest News' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'/>

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,link,title,date,content,categories} = item;

            return (
              <div key={id}>
                <PostItem image={image} alt={alt} link={link} title={title} date={date} content={content} categories={categories}>
                  <></>
                  <></>
                </PostItem>
              </div>
            );
          })}
        </div>

        <BtnHide link='/articles' content='articles'></BtnHide>
      </div>
    </div>
  );
}

export default News;