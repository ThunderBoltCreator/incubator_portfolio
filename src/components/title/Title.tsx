import React, {FC, ReactNode} from 'react';
import {StyledTitle} from "../../styledComponents/Title.styled";

interface ITitleStyled {
   tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
   decor?: boolean
   decorWidth?: string | number
   color?: string
   fontSize?: string
   textAlign?: 'center' | 'left' | 'right'
   sharp?: boolean
   children: ReactNode
   mb?: string
   mt?: string
   mr?: string
   ml?: string
   pt?: string
   pb?: string
   pr?: string
   pl?: string
}

export const Title: FC<ITitleStyled> = (props) => {
   const {children, sharp, tag} = props

   // if (sharp) return (
   //    <StyledTitle>
   //       <span>#</span>{children}
   //    </StyledTitle>
   // )
   //
   // return (
   //    <StyledTitle>
   //       {children}
   //    </StyledTitle>
   // );

   return (
      <StyledTitle {...props} as={tag}>
         {sharp && <span>#</span>}{children}
      </StyledTitle>
   )
};
