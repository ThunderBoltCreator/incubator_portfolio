import {Footer} from './layout/footer/Footer'
import {Header} from './layout/header/Header'
import {AboutMe} from './layout/sections/aboutMe/AboutMe'
import FirstSection from './layout/sections/firstSection/FirstSection'
import {Contact} from './layout/sections/contacts/Contact'
import Skills from './layout/sections/skills/Skills'
import Projects from './layout/sections/projects/Projects'

function App() {
   return (
      <>
         <Header/>
         <main>
            <FirstSection/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contact/>
         </main>
         <Footer/>
      </>
   )
}

export default App
