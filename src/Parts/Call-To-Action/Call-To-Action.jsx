import { Link } from 'react-router-dom';
// Css
import './Call-To-Action.css';

function CallToAction() {
  return (
    <div className='call-to-action'>
      <div className='container'>
        <section>
          <h2 className='title-lg subline'>building inspiring spaces</h2>
          <p className='content'>vivamus sed consectetur tellus dolor sit amet, consectetur adipiscing lorem elit sadip ipsum ets ficilis uns.</p>
        </section>

        <div>
          <Link to='/get-quote' className='btn btn-primary btn-lg'>get a free quote</Link>
          <p className='sub-btn'>Only takes a few seconds!</p>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;