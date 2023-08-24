import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'
import {LangSwitcher} from '../langSwitcher/LangSwitcher'
import Menu from '../menu/Menu'

interface IHeaderActions {
}

export const HeaderActions: FC<IHeaderActions> = (props) => {
   return (
      <HeaderActionsStyled gap={'0 32px'} alignItems={'center'}>
         <Menu/>
         <LangSwitcher/>
      </HeaderActionsStyled>
   )
}


const HeaderActionsStyled = styled(FlexContainerStyled)`

`