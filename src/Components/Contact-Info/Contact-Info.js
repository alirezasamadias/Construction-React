// Css
import './Contact-Info.css';

// Fake Server
const data = [
  {
    id: 1,
    link: 'tel:1.800.458.556',
    title: 'Phone: ',
    content: '1.800.458.556'
  },
  
  {
    id: 2,
    link: 'tel:552.720.546.210',
    title: 'Mobile: ',
    content: '552.720.546.210'
  },

  {
    id: 3,
    link: 'mailto:info@your-domain.com',
    title: 'Email: ',
    content: 'info@your-domain.com'
  },

  {
    id: 4,
    link: 'https://theme-fusion.com/',
    title: 'Web: ',
    content: 'https://theme-fusion.com'
  },
];

function ContactInfo() {
  return (
    <section className='contact-info'>
      <h2 className='title-md'>contact info</h2>

      <p>1600 Amphitheatre Parkway London WC1 1BA</p>

      <ul className='list'>
        {data.map((item) => {
          const {id,title,link,content} = item;
          
          return (
            <li key={id}>
              <span>{title}</span>
              <a href={link} className='text-link'>{content}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
  
export default ContactInfo;