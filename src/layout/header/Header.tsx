import {FC} from 'react'
import styled from 'styled-components'
import {LangSwitcher} from '../../components/langSwitcher/LangSwitcher'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'
import {AppContainer} from '../../styledComponents/AppContainer.styled'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {
   return (
      <header>
         <AppContainer>
            <HeaderStyled alignItems="center" justifyContent="space-between">
               <Logo/>
               <HeaderActionsStyled gap={'0 32px'} alignItems={'center'}>
                  <Menu/>
                  <LangSwitcher/>
               </HeaderActionsStyled>
            </HeaderStyled>
         </AppContainer>
      </header>

   )
}

export const HeaderStyled = styled(FlexContainerStyled)`
  width: 100%;
  padding: 10px 0;
  font-size: 24px;
`

const HeaderActionsStyled = styled(FlexContainerStyled)`
`