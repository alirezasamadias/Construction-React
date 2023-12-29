// Images
import BlogPost01 from '../../Assets/Images/Blog-Post-01.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
import BlogPost03 from '../../Assets/Images/Blog-Post-03.jpg';
// Components
import PostItem from '../../Components/Post-Item/Post-Item';
// Css
import './Related-Posts.css';

// Fake Server
const data = [
    {
        id: 1,
        image: BlogPost01,
        alt: 'Blog Post',
        link: '/article01',
        title: 'redeveloping florida’s remote southern coast', categories: [],
        date: 'december 7th, 2015'
    },

    {
        id: 2,
        image: BlogPost02,
        alt: 'Blog Post',
        link: '/article02',
        title: 'how We manage large construction projects',
        categories: [],
        date: 'december 7th, 2015'
    },

    {
        id: 3,
        image: BlogPost03,
        alt: 'Blog Post',
        link: '/article03',
        title: 'future proofing a modern home',
        categories: [],
        date: 'december 6th, 2015'
    },
];

function RelatedPosts(props) {
    const {targetTitle} = props;

    const postItems = data.filter(item => item.title !== targetTitle);

    return (
        <section className='related-posts'>
            <h3 className='title-sm'>related posts</h3>

            <div className='parent-items'>
                {postItems.map(postItem => {
                    const {id,image,alt,link,title,categories,date} = postItem;

                    return (
                        <div key={id}>
                            <PostItem image={image} alt={alt} link={link} title={title} categories={categories} date={date}>
                                <a href='#leave-comment' className='text-link'>0 comments</a>
                                <></>
                            </PostItem>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default RelatedPosts;