import { Link } from 'react-router-dom';

function BoxCategorySm(props) {
    const {date,categories} = props;
    
    return (
        <p>
            <span>by admin</span>
            
            <span> | {date} {date ? '|' : ''} </span>

            {categories.map((category , index) => {
                return (
                    <span key={index + 1}>
                        <Link  to={`/category#${category}`} className='text-link'>{category}</Link>
                        
                        {/* index + 1 => next child */}
                        {categories[index + 1] ? ' , ' : ''}
                    </span>
                );
            })}
        </p>
    );
}

export default BoxCategorySm;