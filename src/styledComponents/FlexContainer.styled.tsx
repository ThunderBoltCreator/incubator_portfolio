import styled from 'styled-components'

interface IFlexContainerStyled {
   wrap?: 'wrap' | 'nowrap'
   alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch'
   justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around'
   direction?: 'column' | 'row'
   gap?: number | string
}

export const FlexContainerStyled = styled.div<IFlexContainerStyled>`
  display: flex;
  flex-wrap: ${props => props.wrap};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.direction};
  gap: ${props => props.gap};
`