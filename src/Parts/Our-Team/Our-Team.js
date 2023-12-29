// Images
import AvadaTeam01 from '../../Assets/Images/Avada-Team-01.jpg';
import AvadaTeam02 from '../../Assets/Images/Avada-Team-02.jpg';
import AvadaTeam03 from '../../Assets/Images/Avada-Team-03.jpg';
// Components
import HedSection from '../../Components/Hed-Section/Hed-Section';
import SocialMedia from '../../Components/Social-Media/Social-Media';
// Css
import './Our-Team.css';

// Fake Server
const data = [
  {
    id: 1,
    image: AvadaTeam01,
    alt: 'Avada Team',
    name: 'george johnson',
    job: 'commercial director',
    facebook: '',
    twitter: '',
    instagram: '',
    content: 'duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },

  {
    id: 2,
    image: AvadaTeam03,
    alt: 'Avada Team',
    name: 'simon taylor',
    job: 'creative director',
    facebook: '',
    twitter: '',
    instagram: '',
    content: 'duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  
  {
    id: 3,
    image: AvadaTeam02,
    alt: 'Avada Team',
    name: 'elizabeth berkley',
    job: 'operations director',
    facebook: '',
    twitter: '',
    instagram: '',
    content: 'duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
];

function OurTeam() {
  return (
    <div className='our-team parent-semicircular'>
      {/* semicircular */}
      <div className='semicircular'></div>

      <div className='container'>
        <HedSection
          title='meet our team'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.'
        />

        <div className='parent-items'>
          {data.map(item => {
            const {id,image,alt,name,job,facebook,twitter,instagram,content} = item;

            return (
              <section key={id} className='Person-Card'>
                <div className='parent-img'>
                  <img src={image} alt={alt} className='card-img'/>
                </div>

                <div className='card-content'>
                  <h3 className='title-md'>{name}</h3>
                  <h3 className='title-md'>{job}</h3>

                  <nav className='card-social'>
                    <SocialMedia
                      url={`https://m.facebook.com/${facebook}`}
                      className='card-social-icon'
                      tooltip='facebook'
                      icon='icon-facebook'
                    />
                    
                    <SocialMedia
                      url={`https://www.Twitter.com/${twitter}`}
                      className='card-social-icon'
                      tooltip='twitter'
                      icon='icon-twitter'
                    />
                    
                    <SocialMedia
                      url={`https://www.instagram.com/${instagram}`}
                      className='card-social-icon'
                      tooltip='instagram'
                      icon='icon-instagram'
                    />
                  </nav>

                  <p>{content}</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;