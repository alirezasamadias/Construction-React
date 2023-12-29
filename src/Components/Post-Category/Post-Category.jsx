// Css
import './Post-Category.css';

function PostCategory(props) {
    const {children} = props;

    return (
        <nav className='post-category'>
            {children}
        </nav>
    );
}

export default PostCategory;