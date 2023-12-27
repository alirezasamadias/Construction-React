// Images
import ServicesTabs03 from '../../Assets/Images/Services-Tabs-03.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
// Components
import Loader from '../../Components/Loader/Loader';
import ArticlePage from '../../Parts/Article-Page/Article-Page';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';

function Article02() {
    // title
    useTabTitle('How We Manage Large Construction Projects');
    // current page
    useCurrentPage();

    return (
    <>
        <Loader/>
        <ArticlePage title='how We manage large construction projects' categories={['architecture','buildings','contortion','news']}>
            <img src={BlogPost02} alt='Blog Post'/>
        
            <h2 className='title-md'>technology is here to stay</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare leo, eget aliquam ante. Sed cursus malesuada fringilla. Cras porta ipsum sed nibh consectetur, a accumsan velit viverra. Etiam at lorem accumsan, aliquam est at, auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quis ipsum pellentesque, vulputate tellus ac, suscipit neque. Praesent arcu ante, pharetra nec turpis sed, malesuada vulputate tortor.</p>

            <img src={ServicesTabs03} alt='Services Tabs'/>

            <h3 className='title-sm'>modern homes demand smart technology</h3>

            <p>Quisque bibendum diam in nisi mattis ultrices. Vestibulum bibendum suscipit consectetur. Cras sed felis aliquam mi vehicula tincidunt eget nec tortor. In quis elementum quam. Cras sed justo ut ex mollis commodo. Ut protector pharetra blandit. Ut ac tellus non nisl vulputate iaculis eget quis urna.</p>

            <ul className='list'>
                <li className='list-item'>
                    <i className='icon-checkmark'></i>
                    praesent elementum molestie metus, vitae faucibus odio euismod vitae.
                </li>
                <li className='list-item'>
                    <i className='icon-checkmark'></i>
                    nullam faucibus sapien eu neque sagittis, ut commodo nunc protector.
                </li>
                <li className='list-item'>
                    <i className='icon-checkmark'></i>
                    cras velit nibh, protector id consequat non, porta sit amet orci.
                </li>
                <li className='list-item'>
                    <i className='icon-checkmark'></i>
                    proin rhoncus, urna sed pretium tincidunt, leo tellus sagittis velit, et placerat elit dolor non felis.
                </li>
            </ul>

            <h3 className='title-sm'>this trend is set to continue</h3>

            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum aliquam venenatis. Quisque pulvinar orci mauris, eget gravida nibh lobortis a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum fermentum est in euismod. Aliquam interdum metus a lorem pellentesque pretium id eu velit. Sed sollicitudin nisl arcu, sed vestibulum eros tempor eget.</p>

            <blockquote className='text-spacial'>The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.</blockquote>

            <p>Vestibulum ac nulla non nisl malesuada sagittis. Aliquam fringilla ex quis protector mattis. Nam in lacus porta, porta elit et, ultricies tortor. Cras vitae purus non nisl viverra fermentum. Curabitur et sodales elit, sit amet rutrum turpis. Curabitur efficitur ex quis nunc facilisis, at commodo mi pellentesque.</p>

            <p>Curabitur magna nunc, congue sit amet scelerisque id, dictum tristique nulla. Nulla sagittis eget tortor ac aliquam. Quisque auctor, erat at tincidunt egestas, justo dui scelerisque est, in porta libero lacus ac ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </ArticlePage>
    </>
    );
}

export default Article02;