import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import WorkItem from '../../../components/workItem/WorkItem'

import proj1 from '../../../assets/images/proj-1.webp'
import proj2 from '../../../assets/images/proj-2.webp'
import proj3 from '../../../assets/images/proj-3.webp'
import proj4 from '../../../assets/images/proj-4.webp'
import proj5 from '../../../assets/images/proj-5.webp'
import proj6 from '../../../assets/images/proj-6.webp'
import {Title} from "../../../styledComponents/Title.styled";

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
         <Title>
            Last work
         </Title>
         <StyledWork wrap={'wrap'} gap={'50px'} justifyContent={'center'} as={'section'}>
            {renderProjects()}
         </StyledWork>
      </section>
   )
}

export default Works

const StyledWork = styled(FlexContainerStyled)``