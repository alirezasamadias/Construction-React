import { Link } from 'react-router-dom';
// Components
import ImgShadow from '../Img-Shadow/Img-Shadow';
// Css
import './Post-Item.css';

function PostItem(props) {
    const {image,alt,link,title,date,categories,content,children,dataTarget} = props;

    return (
        <div className='post-item' data-target={dataTarget}>
            <ImgShadow image={image} alt={alt} link={link} title={title} categories={categories}/>

            <section className='post-content'>
                <h3 className='title-md'><Link to={link} className='text-link'>{title}</Link></h3>
                <p className='post-info'>
                    {date} 
                    
                    {/* children[0] => category or num comment*/}
                    {children[0].type === 'a' ? ' | ' : ''}
                    {children[0]}
                </p>
                <p>{content}</p>

                {/* children[1] => post category */}
                {children[1]}
            </section>
        </div>
    );
}

export default PostItem;