import React, {FC} from 'react';
import styled from "styled-components";
import {ImageBox} from "../../styledComponents/Common.styled";
import {FlexContainerStyled} from "../../styledComponents/FlexContainer.styled";
import Button, {ButtonStyled} from "../button/Button";


interface IProjItem {
   image: string
   title: string
   stack: string[]
   description: string
}

export const ProjItem: FC<IProjItem> = ({stack,description,title,image}) => {

   const renderStack = () => (
      stack.map((item, index) => (
         <span key={index + item}>{item}</span>
      ))
   )

   return (
      <ProjItemStyled>
         <ImageBox>
            <img src={image} alt="Project Intro"/>
         </ImageBox>
         <ProjStack wrap={'wrap'} gap={'5px 16px'}>{renderStack()}</ProjStack>
         <ProjectBody>
            <ProjTitle>{title}</ProjTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <Button pink>Live</Button>
         </ProjectBody>
      </ProjItemStyled>
   );
};



const ProjStack = styled(FlexContainerStyled)`
  border-top: 1px solid ${props => props.theme.color.primary};
  border-bottom: 1px solid ${props => props.theme.color.primary};
  padding: 8px;
`
const ProjTitle = styled.h3``

const ProjectDescription = styled.p`
  margin: 16px 0;
`
const ProjectBody = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${ProjectDescription} {
    flex-grow: 1;
  }
`
const ProjItemStyled = styled.div`
  border: 1px solid ${props => props.theme.color.primary};
  flex: 1 1 30%;
  min-width: 307px;
  display: flex;
  flex-direction: column;
  
   ${ImageBox} {
     flex: 0 0 200px;
     max-width: 100%;
     img {
       width: 100%;
       height: 100%;
       object-fit: cover;
       object-position: center;
     }
   }
  
  ${ProjStack} {

  }
  
  ${ProjectBody} {
    flex: 1;
  }
  
  ${ProjTitle} {
    
  }
`