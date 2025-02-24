import './App.css'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import EducationBlock from './components/EducationBlock.jsx'
import CertificatesBlock from './components/CertificatesBlock.jsx'
import AboutMeBlock from './components/AboutMeBlock.jsx'
import ProjectsBlock from "./components/ProjectsBlock.jsx"
import WorkExperienceBlock from './components/WorkExperienceBlock.jsx'
import ContactBlock from './components/ContactBlock.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Header />
      <NavBar />
      <AboutMeBlock id="aboutMe" />
      <ProjectsBlock id="projects" />
      <WorkExperienceBlock id="workExperience" />
      <EducationBlock id="education" />
      <CertificatesBlock id="certificates" />
      <ContactBlock id="contact" />
      <Footer />

    </>
  )
}

export default App
