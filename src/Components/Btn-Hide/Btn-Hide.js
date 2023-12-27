import { Link } from 'react-router-dom';
// Css
import './Btn-Hide.css';

function BtnHide(props) {
  const {link,content} = props;

  return (
    <Link to={link} className='btn btn-hide'>view all {content}</Link>
  );
}

export default BtnHide;