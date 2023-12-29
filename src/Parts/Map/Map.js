import { useState } from 'react';
// Css
import './Map.css';

function Map() {
  const [show , setShow] = useState();

  const clickHandler = () => setShow(true);

  return (
    <div className='parent-map'>
      <p>For privacy reasons Google Maps needs your permission to be loaded.</p>

      <button className='btn btn-primary' onClick={clickHandler}>{show ? 'loading...' : 'i accept'}</button>

      {show && <iframe className='map' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79477.58825436738!2d-0.171649!3d51.500838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fe2d0cda3a1%3A0x9020e6e0f234ea4a!2sNotting%20Hill%2C%20London%2C%20UK!5e0!3m2!1sen!2sus!4v1695680017957!5m2!1sen!2sus' title='map'></iframe>}
    </div>
  );
}

export default Map;