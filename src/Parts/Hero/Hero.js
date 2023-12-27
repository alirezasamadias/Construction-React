// Css
import './Hero.css';

function Hero(props) {
  const {title,content,children} = props;

  return (
    <div className='hero'>
      <section className='container'>
        <h1 className='title-lg'>{title}</h1>

        <p className='hero-content'>{content}</p>
        
        {children}
      </section>
    </div>
  );
}

export default Hero;