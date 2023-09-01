import React, {FC, ReactNode} from 'react'
import {ITitleStyled} from '../../styledComponents/Title.styled'
import {StyledTitle} from '../../styledComponents/Title.styled'

interface ITitle extends ITitleStyled {
   tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
   children: ReactNode
}

export const Title: FC<ITitle> = (props) => {
   const {children, sharp, tag} = props

   return (
      <StyledTitle {...props} as={tag}>
         {sharp && <span>#</span>}{children}
      </StyledTitle>
   )
}
