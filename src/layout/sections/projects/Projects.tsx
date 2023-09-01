import {FC} from 'react'

import proj1 from '../../../assets/images/projects/proj-1.webp'
import proj2 from '../../../assets/images/projects/proj-2.webp'
import proj3 from '../../../assets/images/projects/proj-3.webp'

import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import {ProjItem} from '../../../components/projItem/ProjItem'
import {Title} from '../../../components/title/Title'

interface IWorks {
}

const Projects: FC<IWorks> = (props) => {
   const projects = [
      {
         image: proj1,
         title: 'ChertNodes',
         description: 'Minecraft servers hosting ',
         stack: ['HTML', 'SCSS', 'Python', 'Flask']
      },
      {
         image: proj2,
         title: 'ProtectX',
         description: 'Discord anti-crash bot',
         stack: ['React', 'Express', 'Discord.js', 'Node.js', 'HTML', 'SCSS', 'Python', 'Flask']
      },
      {
         image: proj3,
         title: 'Kahoot Answers Viewer',
         description: 'Get answers to your kahoot quiz',
         stack: ['CSS', 'Express', 'Node.js']
      }
   ]

   const renderProjects = () => (
      projects.map(({image, description, title, stack}, index) => (
         <ProjItem key={index + title} image={image} description={description} title={title} stack={stack}/>
      ))
   )

   return (
      <AppContainer marginBot={110} as="section" relative>
         <Title tag={'h2'} mb={'48px'} sharp decor>
            projects
         </Title>
         <ViewAll>View all...</ViewAll>

         <ProjectsBody wrap="wrap" justifyContent="space-between" gap="30px 16px">
            {renderProjects()}
         </ProjectsBody>
      </AppContainer>
   )
}

export default Projects

const ViewAll = styled.button`
  position: absolute;
  top: 7px;
  right: 15px;

  color: ${props => props.theme.color.secondary};
  font-size: 16px;
  font-weight: 500;
`

const ProjectsBody = styled(FlexContainerStyled)`

`