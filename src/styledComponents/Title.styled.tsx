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
  font-size: ${props => props.fontSize};
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  padding: ${props => props.padding};

  span {
    color: ${props => props.theme.color.decoration};
  }
`