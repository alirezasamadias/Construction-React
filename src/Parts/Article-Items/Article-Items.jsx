// Images
import BlogPost01 from '../../Assets/Images/Blog-Post-01.jpg';
import BlogPost02 from '../../Assets/Images/Blog-Post-02.jpg';
import BlogPost03 from '../../Assets/Images/Blog-Post-03.jpg';
// Components
import PostItem from '../../Components/Post-Item/Post-Item';
import PostCategory from '../../Components/Post-Category/Post-Category';
import BtnReadMore from '../../Components/Btn-Read-More/Btn-Read-More';
import BoxCategorySm from '../../Components/Box-Category/Box-Category-Sm';
// Css
import './Article-Items.css';

// Fake Server
const data = [
    {
        id: 1,
        image: BlogPost01,
        alt: 'Blog Post',
        link: '/article01',
        title: 'redeveloping florida’s remote southern coast',
        content: 'technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare',
        categories: ['commercial'],
        postCategories: ['architecture','buildings','news']
    },

    {
        id: 2,
        image: BlogPost02,
        alt: 'Blog Post',
        link: '/article02',
        title: 'how We manage large construction projects',
        content: 'technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare',
        categories: ['residential'],
        postCategories: ['architecture','contortion','engineering']
    },

    {
        id: 3,
        image: BlogPost03,
        alt: 'Blog Post',
        link: '/article03',
        title: 'future proofing a modern home',
        content: 'technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed at magna. Nullam eget ornare',
        categories: ['commercial'],
        postCategories: ['architecture','contortion','marketing']
    },
];

function ArticleItems() {
  return (
    <div className='article-items'>
        <div className='container'>
            {data.map(item => {
                const {id,image,alt,link,title,content,categories,postCategories} = item;

                return (
                    <div key={id}>
                        <PostItem image={image} alt={alt} link={link} title={title} content={content} categories={categories}>
                            <></>
                            <PostCategory>
                                <BoxCategorySm categories={postCategories}/>

                                <BtnReadMore link={link}/>
                            </PostCategory>
                        </PostItem>
                    </div>
                );
            })}
        </div>
    </div>
  );
}

export default ArticleItems;