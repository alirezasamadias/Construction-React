// Components
import SocialMedia from '../Social-Media/Social-Media';
// Css
import './Sharing-Box.css';

// Fake Server
const data = [
    {
        id: 1,
        url: 'https://m.facebook.com/',
        tooltip: 'facebook',
        icon: 'icon-facebook'
    },

    {
        id: 2,
        url: 'https://twitter.com/',
        tooltip: 'twitter',
        icon: 'icon-twitter',

    },

    {
        id: 3,
        url: 'https://linkedin.com/',
        tooltip: 'linkedin',
        icon: 'icon-linkedin'
    },

    {
        id: 4,
        url: 'https://whatsapp.com/',
        tooltip: 'whatsapp',
        icon: 'icon-whatsapp'
    },

    {
        id: 5,
        url: 'https://pinterest.com/',
        tooltip: 'pinterest',
        icon: 'icon-pinterest'
    },

    {
        id: 6,
        url: 'https://email.com/',
        tooltip: 'email',
        icon: 'icon-email',

    }
];

function SharingBox() {
    return (
        <section className='sharing-box'>
            <h3 className='title-sm'>share this post with others!</h3>

            <nav className='social-networks'>
                {data.map(item => {
                    const {id,url,tooltip,icon} = item;

                    return (
                        <div key={id}>
                            <SocialMedia url={url} className='networks-icon' tooltip={tooltip} icon={icon}/>
                        </div>
                    );
                })}
            </nav>
        </section>
    );
}

export default SharingBox;