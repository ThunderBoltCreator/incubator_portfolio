import {ReactNode} from 'react'
import {FC} from 'react'
import {css} from 'styled-components'
import styled from 'styled-components'

interface IButton {
   children: ReactNode
   pink?: boolean
}

const Button: FC<IButton> = ({children, pink}) => {

   return (
      <ButtonStyled pink={pink}>{children}</ButtonStyled>
   )
}

interface IButtonStyled {
   pink?: boolean
}

const ButtonStyled = styled.button<IButtonStyled>`
  padding: 8px 16px;
  font-weight: 500;
  transition: background-color .3s ease-in-out;
  background-color: transparent;

  border: 1px solid ${props => props.theme.color.primary};
  color: ${props => props.theme.color.primary};

  &:hover {
    background-color: rgba(171, 178, 191, 0.20);
  }

  ${props => props.pink && css`
    border: 1px solid ${props => props.theme.color.decoration};
    color: ${props => props.theme.color.secondary};

    &:hover {
      background-color: rgba(199, 120, 221, 0.20);
    }
  `}

`
export default Button