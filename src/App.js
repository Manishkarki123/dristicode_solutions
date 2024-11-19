// Home Page
import './App.css';
import Header from './Components/Home/Header';
import Navbar from './Common/Navbar';
import Comp_Carousel from './Common/Comp_Carousel';
import Overview from './Components/Home/Overview';
import Cards from './Components/Home/Cards';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Main from './pages/home/Main';
import Footer from './Common/Footer';
import Get_app from './Common/Get_app';

// How it Works Page
import Works_Header from './Components/Works/Works_Header';
import Counter from './redux/components/Counter';
import Works_Main from './pages/HowItWorks/Works_Main';
import Features from './Components/Features/Features';
import Features_Main from './pages/Features/Features_Main';
import Team from './Components/Team/Team';
import Team_Main from './pages/Team/Team_Main';
import Pricing from './Components/Pricing/Pricing';
import Main_Pricing from './pages/Pricing/Main_Pricing';
import Faq from './Components/Faq/Faq';
import Faq_main from './pages/Faq/Faq_main';
import Blogs from './Components/Blogs/Blogs';
import DetailPage from './Common/DetailPage';

function App() {
  return (
    <BrowserRouter >

      <Routes>

        {/* Common Components paths */}

        <Route path='/footer' element={<Footer />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path='/getapp' element={<Get_app />} />

        {/* Home Page Paths */}
        <Route path="/" element={<Main />} />
        <Route path="/header" element={<Header />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/carousel" element={<Comp_Carousel />} />

        {/* How It Works Page Paths  */}
        <Route path='/main/works' element={<Works_Main />} />
        <Route path='/works_header' element={<Works_Header />} />

        {/* Features */}
        <Route path='/features' element={<Features />} />
        {/* redux */}
        <Route path='/redux' element={<Counter />} />
        <Route path='/main/features' element={<Features_Main />} />

        {/* Team */}

        <Route path='/team' element={<Team />} />
        <Route path='/main/team' element={<Team_Main />} />

        {/* Pricing */}
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/main/pricing' element={<Main_Pricing />} />

        {/* Faq */}
        <Route path='/faq' element={<Faq />} />

        {/* Main Faq */}
        <Route path='/main/faq' element={<Faq_main />} />

        {/* Blog */}
        <Route path='/blog' element={<Blogs />} />

        {/* Detail page */}
        <Route path ='/blog/readmore/:id' element={<DetailPage/>} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;