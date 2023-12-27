// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import HedSection from '../../Components/Hed-Section/Hed-Section';
import Form from '../../Components/Form/Form';
import Map from '../../Parts/Map/Map';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import '../../Assets/Css/Main-Column.css';
import './Get-Quote.css';

// Fake Server
const data = [
  {
    id: 1,
    title: 'london office',
    address: ['1600 Amphitheatre Parkway','London WC1 1BA'], telephone: '1.800.458.556',
    email: 'info@your-domain.com',
    date: 'Mon - Sat . 9.00 - 18.00',
  },

  {
    id: 2,
    title: 'newyork office',
    address: ['1600 Amphitheatre Parkway','newyork WC1 1BA'], telephone: '1.800.458.556',
    email: 'info@your-domain.com',
    date: 'Mon - Sat . 9.00 - 18.00',
  },

  {
    id: 3,
    title: 'singapore office',
    address: ['1600 Amphitheatre Parkway','singapore WC1 1BA'], telephone: '1.800.458.556',
    email: 'info@your-domain.com',
    date: 'Mon - Sat . 9.00 - 18.00' 
  }
];

function GetQuote() {
  // title
  useTabTitle('Get Quote');
  // current page
  useCurrentPage();

  return (
  <>
    <Loader/>
    <main id='main' className='get-quote'>
      <Hero title='get a free quote' content='our construction teams are on-hand to help everyday'/>

      <div className='main-column'>
        {/* main info */}
        <div className='main-info'>
          {data.map(item => {
            const {id,title,address,telephone,email,date} = item;

            return (
              <section key={id}>
                <h3 className='title-sm subline'>{title}</h3>

                <ul className='list'>
                  <li className='list-item'>
                    <i className='icon-home list-icon'></i>
                    <p>{address[0]}<br/>{address[1]}</p>
                  </li>

                  <li className='list-item'>
                    <i className='icon-phone list-icon'></i>
                    <p><a href='tel:+1800458556' className='text-link'>{telephone}</a></p>
                  </li>

                  <li className='list-item'>
                    <i className='icon-email list-icon'></i>
                    <a href='mailto:mailto:info@your-domain.com' className='text-link'>{email}</a>
                  </li>

                  <li className='list-item'>
                    <i className='icon-clock list-icon'></i>
                    <p>{date}</p>
                  </li>
                </ul>
              </section>
            );
          })}
        </div>

        {/* main content */}
        <div className='main-content'>
          <div className='container'>
            <HedSection
              title='talk to us - we’re here to help'
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper arcu arcu, non molestie elit euismod maximus. Pellentesque sed est tempus, ullamcorper lorem eu, dictum justo.'
            />

            <Form/>
          </div>
        </div>
      </div>

      <Map/>
    </main>
  </>
  );
}

export default GetQuote;