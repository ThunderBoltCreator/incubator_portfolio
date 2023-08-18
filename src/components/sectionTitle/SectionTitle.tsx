import {ReactNode} from 'react'
import {FC} from 'react'
import styled from 'styled-components'

interface ITitle {
   tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
   color?: string
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'

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
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'
}

const TitleStyled = styled.h1<ITitleStyled>`
  font-size: ${props => props.fontSize};
  text-align: ${props => props.textAlign};
  color: ${props => props.color || 'inherit'};
`