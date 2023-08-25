import {FC} from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import styled from "styled-components";
import {FlexContainerStyled} from "../../../styledComponents/FlexContainer.styled";

interface IProjects {}

export const Projects: FC<IProjects> = () => {
   return (
      <div>
         <SectionTitle
            decorWidth={'50%'}
            fontSize={32}
            fontWeight={500}
            color={'#FFF'}
            tag={'h2'}
            margin={'0 0 40px 0'}
         >
            projects
         </SectionTitle>
         <ProjectsStyled>

         </ProjectsStyled>
      </div>
   )
}

const ProjectsStyled = styled(FlexContainerStyled)`

`