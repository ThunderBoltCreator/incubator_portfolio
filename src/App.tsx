import Content from './layout/content/Content'
import Header from './layout/header/Header'
import About from './layout/sections/about/About'
import Skills from './layout/sections/skills/Skills'
import Works from './layout/sections/works/Works'


function App() {
   return (
      <div style={{position: 'relative'}}>
         <Header/>
         <Content>
            <About/>
            <Skills/>
            <Works/>
         </Content>
      </div>
   )
}

export default App
