import {Header} from './layout/header/Header'
import FirstSection from './layout/sections/firstSection/FirstSection'
import {Contact} from './layout/sections/contact/Contact'
import Skills from './layout/sections/skills/Skills'
import {AppContainerStyled} from './styledComponents/AppContainer.styled'
import {Projects} from "./layout/sections/projects/Projects";


function App() {
   return (
      <AppContainerStyled>
         <Header/>
         <main>
            <FirstSection/>
            <Projects />

            {/*<Skills/>*/}
            {/*<Contact/>*/}
         </main>
      </AppContainerStyled>
   )
}

export default App
