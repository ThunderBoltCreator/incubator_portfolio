import styled, {css} from 'styled-components'

interface ITitleStyled {
   decor?: boolean
   decorWidth?: string | number
   color?: string
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'
   sharp?: boolean
   mb?: string
   mt?: string
   mr?: string
   ml?: string
   pt?: string
   pb?: string
   pr?: string
   pl?: string
}

export const StyledTitle = styled.h1<ITitleStyled>`
  color: ${props => props.theme.color.secondary};
  font-size: ${props => props.fontSize};
  text-align: ${props => props.textAlign};
  margin: ${props => props.mt || 0} ${props => props.mr || 0} ${props => props.mb || 0} ${props => props.ml || 0};
  padding: ${props => props.pt || 0} ${props => props.pr || 0} ${props => props.pb || 0} ${props => props.pl || 0};
  
  span {
    color: ${props => props.theme.color.decoration};
  }
  
  ${props => props.decor && css<ITitleStyled>`
    display: flex;
    align-items: center;
    
    &::after {
      content: '';
      display: inline-block;
      background-color: ${props => props.theme.color.decoration};
      margin-left: 16px;
      height: 1px;
      width: ${props => props.decorWidth || '50%'};
    }
  `}
`