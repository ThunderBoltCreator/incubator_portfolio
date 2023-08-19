import React, {FC} from 'react';
import styled from "styled-components";

interface IWorkItem {
   image: string
   description: string
}

const WorkItem: FC<IWorkItem> = ({description, image}) => {
   return (
      <WorkItemStyled >
         <div className={'image-container'}>
            <img src={image} alt="ProjImage"/>
         </div>
         <div className={'body'}>
            {description}
         </div>
      </WorkItemStyled>
   );
}

export default WorkItem;

const WorkItemStyled = styled.div`
  flex: 0 0 33.333%;
  padding: 20px;
  text-align: left;
  
  display: flex;
  flex-direction: column;
  
  .image-container {
    flex: 0 0 330px;
    height: 330px;
    width: 100%;
    
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .body {
    height: 100%;
    flex: 1 1 auto;
    
    font-size: 20px;
  }
`