import {FC} from 'react'
import {HeaderActions} from '../../components/headerActions/HeaderActions'
import Logo from '../../components/logo/Logo'
import {AppContainer} from '../../styledComponents/AppContainer.styled'
import {HeaderStyled} from './Header.styled'

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {
   return (
      <header>
         <AppContainer>
            <HeaderStyled alignItems="center" justifyContent="space-between">
               <Logo/>
               <HeaderActions/>
            </HeaderStyled>
         </AppContainer>
      </header>

   )
}

