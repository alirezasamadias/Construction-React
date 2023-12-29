import { Routes, Route } from 'react-router-dom';
// Components
import Loader from './Components/Loader/Loader';
import Header from './Parts/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Work from './Pages/Work/Work';
import Project01 from './Pages/Project-01/Project-01';
import Project02 from './Pages/Project-02/Project-02';
import Project03 from './Pages/Project-03/Project-03';
import Project04 from './Pages/Project-04/Project-04';
import Services from './Pages/Services/Services';
import Articles from './Pages/Articles/Articles';
import Article01 from './Pages/Article-01/Article-01';
import Article02 from './Pages/Article-02/Article-02';
import Article03 from './Pages/Article-03/Article-03';
import GetQuote from './Pages/Get-Quote/Get-Quote';
import Category from './Pages/Category/Category';
import Footer from './Parts/Footer/Footer';

function App() {
  return (
    <div>
      <Loader/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/project01' element={<Project01/>} />
        <Route path='/project02' element={<Project02/>} />
        <Route path='/project03' element={<Project03/>} />
        <Route path='/project04' element={<Project04/>} />
        <Route path='/articles' element={<Articles/>} />
        <Route path='/article01' element={<Article01/>} />
        <Route path='/article02' element={<Article02/>} />
        <Route path='/article03' element={<Article03/>} />
        <Route path='/get-quote' element={<GetQuote/>} />
        <Route path='/category' element={<Category/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;