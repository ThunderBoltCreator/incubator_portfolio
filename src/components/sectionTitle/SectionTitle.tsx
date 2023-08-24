import {ReactNode} from 'react'
import {FC} from 'react'
import styled from 'styled-components'

interface ITitle extends ITitleStyled {
   tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
   children: ReactNode
}

const SectionTitle: FC<ITitle> = (props) => {
   const {tag, children} = props
   return (
      <TitleStyled
         {...props}
         as={tag}
      >
         {children}
      </TitleStyled>
   )
}

export default SectionTitle

interface ITitleStyled {
   color?: string
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'
   margin?: string
   padding?: string
}

const TitleStyled = styled.h1<ITitleStyled>`
  font-size: ${props => props.fontSize || '48px'};
  text-align: ${props => props.textAlign};
  color: ${props => props.color || 'inherit'};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`