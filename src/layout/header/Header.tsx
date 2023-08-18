import {FC} from 'react'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'
import {HeaderStyled} from './Header.styled'

interface IHeader {
}

const Header: FC<IHeader> = (props) => {
   return (
      <HeaderStyled>
         <Logo/>
         <Menu/>
      </HeaderStyled>
   )
}

export default Header

