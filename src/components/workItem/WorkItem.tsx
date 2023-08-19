import React, {FC} from 'react'
import styled from 'styled-components'

interface IWorkItem {
   image: string
   description: string
}

const WorkItem: FC<IWorkItem> = ({description, image}) => {
   return (
      <WorkItemStyled>
         <div className={'image-container'}>
            <div className={'image'} style={{backgroundImage: `url(${image})`}}/>
         </div>

         <div className={'body'}>
            {description}
         </div>
      </WorkItemStyled>
   )
}

export default WorkItem

const WorkItemStyled = styled.div`
  max-width: 342px;
  text-align: left;
  gap: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .image-container {
    width: 100%;

    aspect-ratio: 1/1;

    .image {

      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
    }
  }

  .body {
    flex: 1 1 auto;

    font-size: 20px;
  }
`