import styled from 'styled-components'

interface ITitleStyled {
   color?: string
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'
   margin?: string
   padding?: string
}

export const Title = styled.h1<ITitleStyled>`
  color: ${props => props.theme.color.secondary};
  font-size: ${props => props.fontSize || '48px'};
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  padding: ${props => props.padding};


  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 600;
  max-width: 500px;

  span {
    color: ${props => props.theme.color.decoration};
  }
`