import styled from 'styled-components'

export const LogoStyled = styled.a`
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
    font-weight: 700;
    color: ${props => props.theme.color.secondary};
  }


`