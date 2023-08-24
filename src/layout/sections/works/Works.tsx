import {FC} from 'react'
import styled from 'styled-components'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import WorkItem from '../../../components/workItem/WorkItem'

import proj1 from '../../../assets/images/proj-1.webp'
import proj2 from '../../../assets/images/proj-2.webp'
import proj3 from '../../../assets/images/proj-3.webp'
import proj4 from '../../../assets/images/proj-4.webp'
import proj5 from '../../../assets/images/proj-5.webp'
import proj6 from '../../../assets/images/proj-6.webp'

interface IWorks {
}

const Works: FC<IWorks> = (props) => {
   const projects = [
      {
         image: proj1,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      },
      {
         image: proj2,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      },
      {
         image: proj3,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      },
      {
         image: proj4,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      },
      {
         image: proj5,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      },
      {
         image: proj6,
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo!'
      }
   ]

   const renderProjects = () => (
      projects.map(({image, description}, index) => (
         <WorkItem key={index + description} image={image} description={description}/>
      ))
   )
   return (
      <section>
         <SectionTitle padding={'0 0 0 65px'} textAlign={'center'} margin={'0 0 30px 0'} tag={'h2'}>Last
            work</SectionTitle>
         <StyledWork wrap={'wrap'} gap={'50px'} justifyContent={'center'} as={'section'}>
            {renderProjects()}
         </StyledWork>
      </section>
   )
}

export default Works

const StyledWork = styled(FlexContainerStyled)``