import {Header} from './layout/header/Header'
import FirstSection from './layout/sections/firstSection/FirstSection'
import {Contact} from './layout/sections/contact/Contact'
import Skills from './layout/sections/skills/Skills'
import Works from './layout/sections/works/Works'
import {AppContainerStyled} from './styledComponents/AppContainer.styled'


function App() {
   return (
      <AppContainerStyled>
         <Header/>
         <main>
            <FirstSection/>
            <Skills/>
            <Works/>
            <Contact/>
         </main>
      </AppContainerStyled>
   )
}

export default App
