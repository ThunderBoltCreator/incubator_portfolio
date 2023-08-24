import {FC} from 'react'
import {HeaderActions} from '../../components/headerActions/HeaderActions'
import Logo from '../../components/logo/Logo'
import {HeaderStyled} from './Header.styled'

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {
   return (
      <HeaderStyled alignItems="center" justifyContent="space-between" as="header">
         <Logo/>
         <HeaderActions/>
      </HeaderStyled>
   )
}

