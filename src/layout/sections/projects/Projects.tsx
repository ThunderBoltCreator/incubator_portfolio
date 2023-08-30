import {FC} from "react";
import styled from "styled-components";
import {FlexContainerStyled} from "../../../styledComponents/FlexContainer.styled";
import {Title} from "../../../styledComponents/Title.styled";

interface IProjects {}

export const Projects: FC<IProjects> = () => {
   return (
      <div>
         <Title>
            projects
         </Title>
         <ProjectsStyled />
      </div>
   )
}

const ProjectsStyled = styled(FlexContainerStyled)`

`