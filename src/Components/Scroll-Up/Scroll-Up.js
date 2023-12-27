import { useState } from 'react';
// Css
import './Scroll-Up.css';

function ScrollUp() {
  const [show , setShow] = useState();

  window.addEventListener('scroll',()=>{
    if (window.scrollY > document.querySelector('.hero').clientHeight){
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <a href='#' className={`scroll-up-page icon-up ${(show ? '' : 'hide')}`}></a>
  );
}

export default ScrollUp;