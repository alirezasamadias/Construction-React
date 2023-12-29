import { Link } from 'react-router-dom';
// Css
import './Btn-Read-More.css';

function BtnReadMore(props) {
    const {link} = props;

    return (
        <Link to={link} className='btn-read-more text-link'>read&nbsp;more<i className='icon-right'></i></Link>
    );
}

export default BtnReadMore;