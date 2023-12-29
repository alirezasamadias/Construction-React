// Images
import Project01 from '../../Assets/Images/Project-01.jpg';
import Project02 from '../../Assets/Images/Project-02.jpg';
import Project03 from '../../Assets/Images/Project-03.jpg';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import ImgShadow from '../../Components/Img-Shadow/Img-Shadow';
import BtnHide from '../../Components/Btn-Hide/Btn-Hide';

// Fake Server
const data = [
  {
    id: 1,
    image: Project01,
    alt: 'Florida Heath Facility',
    link: '/project01',
    title: 'florida heath facility',
    categories: ['commercial']
  },

  {
    id: 2,
    image: Project02,
    alt: 'Maine Modernity',
    link: '/project02',
    title: 'maine moderniti',
    categories: ['residential']
  },
  
  {
    id: 3,
    image: Project03,
    alt: 'Exclusive Urban Living',
    link: '/project03',
    title: 'exclusion urben living',
    categories: ['commercial']
  }
];

function Works() {
  return (
    <div className='works'>
      <div className='container'>
        <HedSection
          title='explore recent work'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,link,title,categories} = item;
            
            return (
              <div key={id}>
                <ImgShadow
                  image={image}
                  alt={alt}
                  link={link}
                  title={title}
                  categories={categories}
                ></ImgShadow>
              </div>
            );
          })}
        </div>
        
        <BtnHide link='/work' content='projects'></BtnHide>
      </div>
    </div>
  );
}

export default Works;