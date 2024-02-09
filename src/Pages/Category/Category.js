import { Link } from 'react-router-dom';
// Images
import BlogPost01 from '../../Assets/Images/Blog-Post-01.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
import BlogPost03 from '../../Assets/Images/Blog-Post-03.jpg';
import Project01 from '../../Assets/Images/Project-01.jpg';
import Project02 from '../../Assets/Images/Project-02.jpg';
import Project03 from '../../Assets/Images/Project-03.jpg';
import Project04 from '../../Assets/Images/Project-04.jpg';
// Components
import Hero from '../../Parts/Hero/Hero';
import Undefined from '../../Components/Undefined/Undefined';
import PostItem from '../../Components/Post-Item/Post-Item';
import PostCategory from '../../Components/Post-Category/Post-Category';
import BtnReadMore from '../../Components/Btn-Read-More/Btn-Read-More';
import BoxCategoryLg from '../../Components/Box-Category/Box-Category-Lg';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Category.css';
import Loader from '../../Components/Loader/Loader';

// Fake Server
const data = [
    {
        id: 1,
        image: BlogPost01,
        alt: 'Blog Post',
        link: '/article01',
        title: 'redeveloping florida’s remote southern coast',
        content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare leo, eget aliquam ante. Sed cursus malesuada fringilla. Cras porta ipsum sed nibh consectetur, a accumsan velit viverra. Etiam at lorem accumsan, aliquam est at, auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quis ipsum pellentesque, vulputate tellus ac, suscipit neque. Praesent arcu ante, pharetra nec turpis sed, malesuada vulputate tortor.',
        categories: ['architecture','buildings','contortion','news'],
        date: 'december 7th, 2015',
        tags: ['construction','honored','house-building'],
    },

    {
        id: 2,
        image: BlogPost02,
        alt: 'Blog Post',
        link: '/article02',
        title: 'how We manage large construction projects',
        content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare leo, eget aliquam ante. Sed cursus malesuada fringilla. Cras porta ipsum sed nibh consectetur, a accumsan velit viverra. Etiam at lorem accumsan, aliquam est at, auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quis ipsum pellentesque, vulputate tellus ac, suscipit neque. Praesent arcu ante, pharetra nec turpis sed, malesuada vulputate tortor.',
        categories: ['architecture','contortion','engineering'],
        date: 'december 7th, 2015',
        tags: ['house-building','how-to-build','marketing-plan']
    },

    {
        id: 3,
        image: BlogPost03,
        alt: 'Blog Post',
        link: '/article03',
        title: 'future proofing a modern home',
        content: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare leo, eget aliquam ante. Sed cursus malesuada fringilla. Cras porta ipsum sed nibh consectetur, a accumsan velit viverra. Etiam at lorem accumsan, aliquam est at, auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque quis ipsum pellentesque, vulputate tellus ac, suscipit neque. Praesent arcu ante, pharetra nec turpis sed, malesuada vulputate tortor.',
        categories: ['architecture','contortion','marketing'],
        date: 'december 6th, 2015',
        tags: ['honored','house-building','marketing-plan']
    },

    {
        id: 4,
        image: Project01,
        alt: 'Florida Heath Facility',
        link: '/project01',
        title: 'florida heath facility',
        content: 'healthy living in Florida flexible health facilities in south florida healthy living in Florida flexible health facilities in south florida do you have a construction project we can help with? Get a free quote Belle Glade, Florida Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ullamcorper odio, vel ultrices nisl tempus vitae. Nullam at eros vitae elit lacinia tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu ligula libero. Curabitur lacinia enim.',
        categories: ['commercial'],
        date: 'december 7th, 2015',
        tags: ['commercial']
    },

    {
        id: 5,
        image: Project02,
        alt: 'Maine Modernity',
        link: '/project02',
        title: 'Maine Modernity',
        content: 'healthy living in Florida flexible health facilities in south florida healthy living in Florida flexible health facilities in south florida do you have a construction project we can help with? Get a free quote Belle Glade, Florida Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ullamcorper odio, vel ultrices nisl tempus vitae. Nullam at eros vitae elit lacinia tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu ligula libero. Curabitur lacinia enim.',
        categories: ['residential'],
        date: 'december 7th, 2015',
        tags: ['residential']
    },

    {
        id: 6,
        image: Project03,
        alt: 'Exclusive Urban Living',
        link: '/project03',
        title: 'Exclusive Urban Living',
        content: 'healthy living in Florida flexible health facilities in south florida healthy living in Florida flexible health facilities in south florida do you have a construction project we can help with? Get a free quote Belle Glade, Florida Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ullamcorper odio, vel ultrices nisl tempus vitae. Nullam at eros vitae elit lacinia tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu ligula libero. Curabitur lacinia enim.',
        categories: ['commercial'],
        date: 'december 7th, 2015',
        tags: ['commercial']
    },

    {
        id: 7,
        image: Project04,
        alt: 'Blue Concrete House',
        link: '/project04',
        title: 'Blue Concrete House',
        content: 'healthy living in Florida flexible health facilities in south florida healthy living in Florida flexible health facilities in south florida do you have a construction project we can help with? Get a free quote Belle Glade, Florida Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ullamcorper odio, vel ultrices nisl tempus vitae. Nullam at eros vitae elit lacinia tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu ligula libero. Curabitur lacinia enim.',
        categories: ['residential'],
        date: 'June 23rd, 2015',
        tags: ['residential']
    }
];

function Category() {
    // title
    useTabTitle('Category');
    // current page
    useCurrentPage();

    const windowHash = window.location.hash.slice(1);

    const targets = data.filter(item => item.categories.includes(windowHash) || item.tags.includes(windowHash));

    // debug by refresh
    const postTargets = document.querySelectorAll('.post-target');
    postTargets.forEach(postTarget => {
        postTarget.addEventListener('click',()=>{
            setTimeout(() => {
                window.location.reload();
            }, 10);
        });
    });

    return (
    <>
        <Loader/>
        <main id='main' className='category'>
            <Hero title={windowHash.replace(/-/g,' ')}/>

            {targets.length === 0 ? <Undefined/> : 
            
            <div className='category-items container'>
                <div className='parent-items'>
                    {targets.map(item => {
                        const {id,title,image,alt,link,content,categories,date,tags} = item;

                        return (
                            <PostItem
                            key={id}
                            image={image} 
                            alt={alt}
                            link={link}
                            title={title}
                            content={content}
                            categories={categories}
                            dataTarget={[...categories , ...tags]}>
                                <BoxCategoryLg
                                date={date}
                                categories={categories}
                                tags={tags}/>

                                <PostCategory>
                                    <BtnReadMore link={link}/>

                                    <Link to={`${link}#leave-comment`} className='comment text-link icon-bubbles'> 0</Link>
                                </PostCategory>
                            </PostItem>
                        );
                    })}
                </div>
            </div>}
        </main>
    </>
    );
}

export default Category;