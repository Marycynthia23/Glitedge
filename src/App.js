// import logo from './logo.svg';
// import './App.css';
import Footer from './Assets/Footer/Footer';
import NavBar from './Assets/NavBar/NavBar';
import Benefits from './Pages/LandingPage/Benefits/Benefits';
import FeaturedHouses from './Pages/LandingPage/FeaturedHouses/FeaturedHouses';
import Form from './Pages/LandingPage/Form/Form';
import HeroSection from './Pages/LandingPage/HeroSection/HeroSection';
import ProjectUnderConstr from './Pages/LandingPage/ProjectUnderConstr/ProjectUnderConstr';
import Services from './Pages/LandingPage/Services/Services';
import Tour from './Pages/LandingPage/Tour/Tour';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Services/>
      <FeaturedHouses/>
      <ProjectUnderConstr/>
      <Benefits/>
      <Form/>
      <Tour/>
      <Footer/>
    </div>
  );
}

export default App;
