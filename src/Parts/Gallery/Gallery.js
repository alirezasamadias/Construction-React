// Css
import './Gallery.css';

function Gallery(props) {
    const {images} = props;

    return (
        <section>
            <h2 className='title-md subline'>project gallery</h2>

            <div className='gallery'>
                {images.map((image , index) => {
                    return (
                        <a href={image.src} key={index + 1}>
                            <img src={image.src} alt={image.alt}  className='gallery-img'/>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}

export default Gallery;