import { Link } from 'react-router-dom';

function BoxCategoryLg(props) {
    const {date,categories,tags} = props;
    
    return (
        <>
            <span>by admin</span>

            <span> | {date} | Categories: </span>

            {categories.map((category , index) => {
                return (
                    <span key={index + 1}>
                        <Link to={`/category#${category}`} className='text-link post-target'>{category}</Link>

                        {/* index + 1 => next child */}
                        {categories[index + 1] ? ' , ' : ''}
                    </span>
                );
            })}

            <span> | Tags: </span>
            
            {tags.map((tag , index) => {
                return (
                    <span key={index + 1}>
                        <Link to={`/category#${tag}`} className='text-link post-target'>{tag}</Link>

                        {/* index + 1 => next child */}
                        {tags[index + 1] ? ' , ' : ''}
                    </span>
                );
            })}
        </>
    );
}

export default BoxCategoryLg;