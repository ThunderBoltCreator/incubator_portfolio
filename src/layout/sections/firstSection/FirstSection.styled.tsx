import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'
import {ImageBoxStyled} from '../../../styledComponents/ImageBox.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'

import {TextBlockContainer} from '../../../styledComponents/TextBlockContainer.styled'
import photo from '../../../assets/images/myPhoto.webp'


const DecorStyled = styled.div`
`

const FirstSectionStyled = styled(FlexContainerStyled)`

  ${TextBlockContainer} {
    width: 50%;
  }

  ${Paragraph} {
    margin-bottom: 24px;
  }

  ${ImageBoxStyled} {
    background-image: url(${photo});
    width: 50%;
    height: 400px;

    > ${DecorStyled} {
      width: 16px;
      height: 16px;
      border: 1px solid ${props => props.theme.color.decoration};
      background-color: ${props => props.theme.color.decoration};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left top;
    }
  }
}
`

const LinkStyled = styled.span`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  border: 1px solid ${props => props.theme.color.primary};
  padding: 8px;
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

export {FirstSectionStyled, DecorStyled, LinkStyled}