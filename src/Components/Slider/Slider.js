import { useEffect, useState, useRef } from 'react';
// Images
import HomeTestimonial01 from '../../Assets/Images/Home-Testimonial-01.jpg';
import HomeTestimonial02 from '../../Assets/Images/Home-Testimonial-02.webp';
// Css
import './Slider.css';

// Fake Server
const data = [
    {   
        id: 1,
        image: HomeTestimonial01,
        alt: 'Testimonial',
        content: 'No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.',
        title: 'happy smith • new home owner'
    },

    {
        id: 2,
        image: HomeTestimonial02,
        alt: 'Testimonial',
        content: 'Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.',
        title: 'john doe • property investor'
    }
];

function Slider() {
  const [slide, setIndex] = useState(0);
  const timeoutRef = useRef();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndex(prevIndex => prevIndex === data.length - 1 ? 0 : prevIndex + 1);
    } , 5000);
  }, [slide]);

  return (
    <div className='slider'>
      {data.map((item , index) => {
        const {id,image,alt,content,title} = item;

        return (
          <div key={id} className={`slide-item ${(slide === index ? 'show' : '')}`}>
            <img src={image} alt={alt} className='slide-img'/>
            <blockquote className='slide-content'>{content}</blockquote>
            <h3 className='title-sm'>{title}</h3>
          </div>
        );
      })}
          
      <div className='radios'>
        {data.map((item , index) => {
          return (
            <span
              key={index}
              className={`radio ${(slide === index ? 'target' : '')}`}
              onClick={()=>setIndex(index)}
            ></span>
          );
        })}
      </div> 
    </div>
  );
}

export default Slider;