import styled from 'styled-components'

interface ITextBlockStyled {
   maxWidth: string | number
}

export const TextBlockStyled = styled.div<ITextBlockStyled>`
  max-width: ${props => props.maxWidth};
`