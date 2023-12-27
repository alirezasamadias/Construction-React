// Images
import Project02Detail01 from '../../Assets/Images/Project-02-Detail-01.jpg';
import Project02Detail02 from '../../Assets/Images/Project-02-Detail-02.jpg';
import Project02Detail03 from '../../Assets/Images/Project-02-Detail-03.jpg';
// Components
import Loader from '../../Components/Loader/Loader';
import Hero from '../../Parts/Hero/Hero';
import SubHero from '../../Components/SubHero/SubHero';
import MainPortfolio from '../../Parts/Main-Portfolio/Main-Portfolio';
import Gallery from '../../Parts/Gallery/Gallery';
import CallToActionForm from '../../Parts/Call-To-Action-Form/Call-To-Action-Form';
// Hooks
import useTabTitle from '../../Hooks/useTabTitle';
import useCurrentPage from '../../Hooks/useCurrentPage';
// Css
import './Project-02.css';

function Project02() {
    // title
    useTabTitle('Maine Modernity');
    // current page
    useCurrentPage();
    
    return (
    <>
        <Loader/>
        <main id='main' className='portfolio-item project-02'>
            <Hero
                title='modern coastal living'
                content='a modern maine home fringed by the atlantic ocean'
            />
            <SubHero/>

            <div className='container'>
                {/* main-column */}
                <MainPortfolio
                title='searsport, maine'
                date='december 7 , 2015'
                client='client company name'
                projectType='residential'
                contractor='theme fusion company'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ullamcorper odio, vel ultrices nisl tempus vitae. Nullam at eros vitae elit lacinia tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent eu ligula libero. Curabitur lacinia enim vitae nulla dapibus, et sodales lacus ornare. Mauris vestibulum consectetur lorem, sit amet laoreet purus tincidunt sed. Aliquam protector ipsum tincidunt.</p>

                    <p>Ut maximus tempor mi, ac eleifend quam ultricies vel. Aliquam volutpat rutrum libero feugiat sagittis. Integer non ultrices sem. Nam tempor consequat dolor, finibus dictum odio euismod sit amet. Maecenas venenatis orci risus, interdum interdum ligula sodales quis. Proin sed pretium purus. Ut et felis cursus, vulputate nulla vitae, vehicula metus. Proin facilisis laoreet mattis. Aliquam imperdiet feugiat erat. Cras suscipit nisi vitae elementum.</p>
                </MainPortfolio>
        
                {/* gallery */}
                <Gallery images={[
                    {src:Project02Detail01, alt:'Project Detail'},
                    {src:Project02Detail02, alt:'Project Detail'},
                    {src:Project02Detail03, alt:'Project Detail'}
                ]}/>
            </div>

            {/* call to action form */}
            <CallToActionForm/>
        </main>
    </>
    );
}

export default Project02;