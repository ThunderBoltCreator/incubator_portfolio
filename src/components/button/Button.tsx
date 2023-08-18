import {ReactNode} from 'react'
import {FC} from 'react'
import {css} from 'styled-components'
import styled from 'styled-components'

interface IButton {
   children: ReactNode
   outlined?: boolean
}

const Button: FC<IButton> = ({children, outlined}) => {

   return (
      <>
         {
            outlined ? (
               <ButtonStyled
                  border
                  color={'#FB3F5C'}
               >
                  {children}
               </ButtonStyled>
            ) : (
               <ButtonStyled>
                  {children}
               </ButtonStyled>
            )
         }
      </>
   )
}

interface IButtonStyled {
   border?: boolean
   color?: string
}

const ButtonStyled = styled.button<IButtonStyled>`
  padding: 20px 60px;
  font-size: 20px;
  border-radius: 18px;
  color: #FFF;
  border: none;
  background-color: #FB3F5C;


  ${props => props.border && css<IButtonStyled>`
    background-color: transparent;
    border: 1px solid ${props => props.color};
    color: ${props => props.color}
  `}
`

export default Button