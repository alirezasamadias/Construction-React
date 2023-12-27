// Css
import '../../Assets/Css/Main-Column.css';
import './Article-Page.css';
// Components
import Hero from '../../Parts/Hero/Hero';
import PostCategory from '../../Components/Post-Category/Post-Category'
import BoxCategorySm from '../../Components/Box-Category/Box-Category-Sm';
import SharingBox from '../../Components/Sharing-Box/Sharing-Box';
import RelatedPosts from '../../Components/Related-Posts/Related-Posts';
import LeaveComment from '../../Components/Leave-Comment/Leave-Comment';
import ArticleSidebar from '../Article-Sidebar/Article-Sidebar';

function ArticlePage(props) {
    const {title,children,categories} = props;

    return (
        <main id='main' className='article-page'>
            <Hero title={title}/>

            {/* main column */}
            <div className='container'>
                <div className='main-column'>
                    {/* main content */}
                    <article className='main-content'>
                        {children}

                        {/* article info */}
                        <PostCategory>
                            <BoxCategorySm date='december 7th, 2015' categories={categories}/>
                        </PostCategory>

                        {/* sharing box */}
                        <SharingBox/>

                        {/* related posts */}
                        <RelatedPosts targetTitle={title}/>

                        {/* leave a comment */}
                        <LeaveComment/>
                    </article>
        
                    {/* sidebar */}
                    <ArticleSidebar/>
                </div>
            </div>
        </main>
    );
}

export default ArticlePage;