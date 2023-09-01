import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'
import SvgIcon from '../svgIcon/SvgIcon'

interface ILangSwitcher {
}

export const LangSwitcher: FC<ILangSwitcher> = (props) => {
   return (
      <LangSwitcherStyled as="button" alignItems={'center'}>
         <span>EN</span>
         <SvgIcon width={10} height={5} iconId={'arrow'}/>
      </LangSwitcherStyled>
   )
}

const LangSwitcherStyled = styled(FlexContainerStyled)`
  span {
    font-size: 16px;
    margin-right: 3px;
  }
`
