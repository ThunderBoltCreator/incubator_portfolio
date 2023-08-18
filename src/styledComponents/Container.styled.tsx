import styled from 'styled-components'

interface IContainerStyled {
   display?: string
   justifyContent?: string
   alignItems?: string
   height?: string | number
}

export const ContainerStyled = styled.div<IContainerStyled>`
  max-width: 1200px;
  padding: 0 30px;
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  margin: 0 auto;
  height: ${props => props.height};
`