import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'
import {Title} from "../../../styledComponents/Title.styled";


const TextBlock = styled.div``
const ImageBox = styled.div``
const DecorStyled = styled.div``
const Link = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  border: 1px solid ${props => props.theme.color.primary};
  padding: 8px 80px 8px 8px;
  font-weight: 500;

  a {
    font-weight: 600;
    color: ${props => props.theme.color.secondary};
  }

  > ${DecorStyled} {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid ${props => props.theme.color.decoration};
    background-color: ${props => props.theme.color.decoration};
  }
`

const FirstSectionStyled = styled(FlexContainerStyled)`
  ${TextBlock} {
    width: 50%;
    
    ${Title} {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 32px;
    }
    ${Paragraph} {
      margin-bottom: 24px;
    }
  }



  ${ImageBox} {
    width: 50%;

    > ${DecorStyled} {
      width: 16px;
      height: 16px;
      border: 1px solid ${props => props.theme.color.decoration};
      background-color: ${props => props.theme.color.decoration};
    }

    img {
      width: 100%;
      height: 100%;
      max-height: 400px;
      object-fit: cover;
      object-position: left top;
    }
  }
}
`



export {TextBlock, ImageBox, FirstSectionStyled, DecorStyled, Link}