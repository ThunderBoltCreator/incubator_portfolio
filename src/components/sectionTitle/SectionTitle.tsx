import {ReactNode} from 'react'
import {FC} from 'react'
import styled from 'styled-components'

interface ITitle extends ITitleStyled{
   tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
   decorWidth?: string
   children: ReactNode
}

const SectionTitle: FC<ITitle> = (props) => {
   const {tag, children} = props
   return (
      <TitleStyled
         {...props}
         as={tag}
      >
         <span>#</span>{children}
      </TitleStyled>
   )
}

export default SectionTitle

interface ITitleStyled {
   color?: string
   fontSize?: string | number
   fontWeight?: number
   textAlign?: 'center' | 'left' | 'right'
   margin?: string
   padding?: string

   decorWidth?: string
}

const TitleStyled = styled.h1<ITitleStyled>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  
  span {
    color: ${props => props.theme.color.decoration};
  }
  
  position: relative;
  display: flex;
  align-items: center;
  
  &:after {
    content: '';
    margin-left: 15px;
    display: inline-block;
    height: 1px;
    width: ${props => props.decorWidth};
    background-color: ${props => props.theme.color.decoration};
  }
`