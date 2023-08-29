import styled from 'styled-components'

interface ITextBlockContainer {
   maxWidth: string | number
}

export const TextBlockContainer = styled.div<ITextBlockContainer>`
  max-width: ${props => props.maxWidth};
`