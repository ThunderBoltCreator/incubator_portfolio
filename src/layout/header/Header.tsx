import {useEffect} from 'react'
import {useState} from 'react'
import {FC} from 'react'
import styled from 'styled-components'
import {LangSwitcher} from '../../components/langSwitcher/LangSwitcher'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'
import {MobileMenu} from '../../components/mobileMenu/MobileMenu'
import {AppContainer} from '../../styledComponents/AppContainer.styled'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'
import {useViewport} from '../../utils/useViewport'

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {

   const {width, height} = useViewport()

   console.log('width', width)
   console.log('height', height)

   return (
      <header>
         <AppContainer>
            <HeaderStyled alignItems="center" justifyContent="space-between">
               <Logo/>
               {
                  width > 920 ? (
                     <HeaderActionsStyled gap={'0 32px'} alignItems={'center'}>
                        <Menu/>
                        <LangSwitcher/>
                     </HeaderActionsStyled>
                  ) : (
                     <MobileMenu>mobile</MobileMenu>
                  )
               }
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