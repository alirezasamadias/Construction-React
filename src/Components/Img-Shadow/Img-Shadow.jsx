import { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import Modal from '../Modal/Modal';
// Css
import './Img-Shadow.css';

function ImgShadow(props) {
    const {image,alt,link,title,categories} = props;

    const [show , setShow] = useState();

    const clickHandler = () => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <>
            <div className='parent-img-shadow' data-target={categories[0]}>
                <img src={image} alt={alt}/>

                <nav className='img-shadow'>
                    <div>
                        <button>
                            <Link to={link} className='shadow-btn icon-link'></Link>
                        </button>
                        <button className='shadow-btn icon-search' onClick={clickHandler}>
                        </button>
                    </div>

                    <h4 className='title-sm'><Link to={link}>{title}</Link></h4>

                    <div className='title-sm'>
                        {categories.map((category , index) => {
                            return (
                                <span key={index + 1}>
                                    <Link to={`/category#${category}`} className='post-target'>{category}</Link>
                                    
                                    {/* index + 1 => next child */}
                                    {categories[index + 1] && ' , '}
                                </span>
                            );
                        })}
                    </div>

                    <Link to={link} className='cover'></Link>
                </nav>
            </div>
            {/* modal */}
            {show && <Modal event={clickHandler} image={image} alt={alt}/>}
        </>
    );
}

export default ImgShadow;