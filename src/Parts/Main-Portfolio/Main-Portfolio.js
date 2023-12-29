import { Link } from 'react-router-dom';
// Css
import '../../Assets/Css/Main-Column.css';
import './Main-Portfolio.css';

function MainPortfolio(props) {
    const {title,children,date,client,projectType,contractor} = props;

    return (
        <div className='main-column'>
            <section className='main-content'>
                <h2 className='title-md subline'>{title}</h2>
                {children}
            </section>

            <section className='main-info'>
                <h2 className='title-md subline'>project details</h2>

                <dl>
                    <dt className='title-sm'>date</dt>
                    <dd className='list-item'>{date}</dd>

                    <dt className='title-sm'>client</dt>
                    <dd className='list-item'>{client}</dd>
                    
                    <dt className='title-sm'>project type</dt>
                    <dd className='list-item'>
                        <Link to={`/category#${projectType}`} className='text-link'>{projectType}</Link>
                    </dd>
                    
                    <dt className='title-sm'>contractor</dt>
                    <dd className='list-item'>{contractor}</dd>
                </dl>
            </section>
        </div>
    );
}

export default MainPortfolio;