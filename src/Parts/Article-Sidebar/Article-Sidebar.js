// Components
import SearchBox from '../../Components/Search-Box/Search-Box';
import Tab from '../../Components/Tab/Tab';
import RecentPosts from '../../Components/Recent-Posts/Recent-Posts';
import RecentWorks from '../../Components/Recent-Works/Recent-Works';
import Categories from '../../Components/Categories/Categories';
import ContactInfo from '../../Components/Contact-Info/Contact-Info';
import Tags from '../../Components/Tags/Tags';
// Css
import './Article-Sidebar.css';

function ArticleSidebar() {
    return (
        <div className='main-info sidebar'>
            <SearchBox/>
            <Tab/>
            <Categories/>
            <RecentPosts/>
            <RecentWorks/>
            <ContactInfo/>
            <Tags/>
        </div>
    );
}

export default ArticleSidebar;