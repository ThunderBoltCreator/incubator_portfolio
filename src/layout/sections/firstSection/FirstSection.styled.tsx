import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'


export const FirstSectionStyled = styled(FlexContainerStyled)`


  .textBlock {
    max-width: 500px;

    h1 {
      color: ${props => props.theme.color.secondary};
      margin-bottom: 32px;
      font-size: 32px;
      font-weight: 600;
      max-width: 500px;

      span {
        color: ${props => props.theme.color.decoration};
      }
    }

    p {
      margin-bottom: 24px;
      line-height: 1.56;
      max-width: 500px;
    }
  }

  .imageBox {
    position: relative;

    img {
      max-height: 450px;
    }

    .decor {
      position: absolute;
      top: 11%;
      left: -2%;
      z-index: -1;
    }

    .link {
      display: inline-flex;
      gap: 10px;
      align-items: center;
      border: 1px solid ${props => props.theme.color.primary};
      padding: 8px;

      font-weight: 500;

      div {
        width: 16px;
        height: 16px;
        border: 1px solid ${props => props.theme.color.decoration};
        background-color: ${props => props.theme.color.decoration};
      }

      a {
        font-weight: 600;
        color: ${props => props.theme.color.secondary};
      }
    }
  }
`