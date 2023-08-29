import styled from 'styled-components'

interface IParagraph {
   fontSize?: string
   fontWeight?: string | number
   color?: string
   lineHeight?: string | number
}

export const Paragraph = styled.p<IParagraph>`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
`