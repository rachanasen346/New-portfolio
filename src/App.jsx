import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HomePage, About, Projects, Contact } from './pages';
import ProjectGallery from './pages/projectGallery';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

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
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="education">
                  <Skills />
                </Element>
                <Element name="work">
                  <Skills />
                </Element>
                <Element name="experience">
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
            path="/project-gallery"
            element={<ProjectGallery />}
          />
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
