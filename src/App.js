// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Companies from './components/Companies';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="p-[9px]">
     {/* Nav bar */}
      <NavBar/>
     {/* Intro */}
      <Home/>
     {/* About */}
      <AboutMe/>
     {/* Skill */}
      <Skills/>
     {/* Portfolio */}
      <Portfolio/>
     {/* Companies */}
      <Companies/>
     {/* Contact us */}
      <Contact/>
     {/* Footer */}
     <Footer/>
    </div>
  );
}

export default App;
