import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HomePage, About, Projects, Contact, Experience } from './pages';
import Resume from './pages/Resume';
import { Skills} from './pages';

const App = () => {
  return (
    <Router>
      <div className='h-[100vh]'>
        {/* Navbar remains fixed */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          {/* Home route with all sections */}
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <HomePage />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="experience">
                  <Experience />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="projects">
                  <Projects />
                </Element>
                <Element name="contact">
                  <Contact />
                </Element>
              </>
            }
          />
          {/* Other routes */}
          <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
