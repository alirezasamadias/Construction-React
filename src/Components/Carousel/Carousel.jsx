import { useState, useEffect } from 'react';
// Images
import HomeLogo01 from '../../Assets/Images/Home-Logo-01.webp';
import HomeLogo02 from '../../Assets/Images/Home-Logo-02.webp';
import HomeLogo03 from '../../Assets/Images/Home-Logo-03.webp';
import HomeLogo04 from '../../Assets/Images/Home-Logo-04.webp';
import HomeLogo05 from '../../Assets/Images/Home-Logo-05.webp';
// Css
import './Carousel.css';

// Fake Server
const data = [
  {
    id: 1,
    src: HomeLogo01,
    alt: 'Home Logo'
  },
  {
    id: 2,
    src: HomeLogo02,
    alt: 'Home Logo'
  },
  {
    id: 3,
    src: HomeLogo03,
    alt: 'Home Logo'
  },
  {
    id: 4,
    src: HomeLogo04,
    alt: 'Home Logo'
  },
  {
    id: 5,
    src: HomeLogo05,
    alt: 'Home Logo'
  },
  {
    id: 6,
    src: HomeLogo01,
    alt: 'Home Logo'
  },
  {
    id: 7,
    src: HomeLogo02,
    alt: 'Home Logo'
  },
  {
    id: 8,
    src: HomeLogo03,
    alt: 'Home Logo'
  },
  {
    id: 9,
    src: HomeLogo04,
    alt: 'Home Logo'
  },
  {
    id: 10,
    src: HomeLogo05,
    alt: 'Home Logo'
  }
];

function Carousel() {
  const [imgWidth , setImgWidth] = useState();
  const [leftNum , setLeftNum] = useState();
  const [drag , setDrag] = useState();

  useEffect(()=>{
    const imgs = document.querySelectorAll('.carousel img');
    const firstImg = imgs[0];
    setImgWidth(firstImg.clientWidth);
  },[]);

  const carousel = document.querySelector('.carousel');
  const imgs = document.querySelectorAll('.carousel img');

  const lastImg = imgs[imgs.length - 1];

  let isDragStart = false;
  let isDragging = false;
  let prevClientX;
  let prevScrollLeft;
  let positionDiff;
  let initialDistance;
  let finalDistance;

  const dragStart = (e)=>{
    setDrag(true);
    isDragStart = true;
    prevClientX = e.clientX;
    prevScrollLeft = Math.round(carousel.scrollLeft);
    initialDistance = Math.round(lastImg.getBoundingClientRect().left);
  };

  const dragging = (e)=>{
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    positionDiff = e.clientX - prevClientX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    finalDistance = Math.round(lastImg.getBoundingClientRect().left);

    if (carousel.scrollLeft === 0){
      setLeftNum('30px');
    }
    if (carousel.scrollLeft !== 0 && initialDistance === finalDistance){
      setLeftNum('-30px');
    }
  };

  const autoSlide = ()=>{
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    
    positionDiff = Math.abs(positionDiff);

    let valDifference = imgWidth - positionDiff;
    
    // scroll to right
    if(carousel.scrollLeft > prevScrollLeft) {
      carousel.scrollLeft += positionDiff > imgWidth / 4 ? valDifference : -positionDiff;
    }

    // scroll to left
    if(carousel.scrollLeft < prevScrollLeft) {
      carousel.scrollLeft -= positionDiff > imgWidth / 4 ? valDifference : -positionDiff;
    }
  };

  const dragStop = ()=>{
    setDrag(false);
    isDragStart = false;
    if(!isDragging) return;
    isDragging = false;
    autoSlide();

    if (carousel.offsetLeft > 0){
      setLeftNum('0px');
    }
    if (initialDistance > finalDistance){
      setLeftNum('0px');
    }
  };

  document.addEventListener('mousemove',dragging);
  document.addEventListener('mouseup',dragStop);
  return (
    <div className='parent-carousel'>
      <div className={`carousel ${drag ? 'dragging' : ''}`} onMouseDown={dragStart} onTouchStart={dragStart} onTouchMove={dragging} onTouchEnd={dragStop} style={{left: leftNum}}>

        {data.map(item => {
          const {id,src,alt} = item;

          return (
            <img src={src} alt={alt} key={id}/>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;