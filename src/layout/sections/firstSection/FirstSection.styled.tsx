import styled from 'styled-components'
import {DecorStyled, TextBlock, ImageBox} from '../../../styledComponents/Common.styled'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'
import {StyledTitle} from '../../../styledComponents/Title.styled'


const FirstLink = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  border: 1px solid ${props => props.theme.color.primary};
  padding: 8px 80px 8px 8px;
  font-weight: 500;

  a {
    font-weight: 600;
    color: ${props => props.theme.color.secondary};

    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 90%;
      height: 2px;
      transform: translate(-100%);
      background-color: #FFF;
      transition: .3s ease;
    }

    &:hover::before {
      transform: translate(0);
    }
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

    ${StyledTitle} {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 32px;
    }

    ${Paragraph} {
      margin-bottom: 24px;
    }
  }


  ${ImageBox} {
    position: relative;
    flex: 0 1 450px;
    //display: flex;
    //flex-direction: column;

    > ${DecorStyled} {
      position: absolute;
      top: 80px;
      left: -20px;
      z-index: -1;

      svg {
        width: 100%;
        height: 100%;
      }
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


export {FirstSectionStyled, DecorStyled, FirstLink}