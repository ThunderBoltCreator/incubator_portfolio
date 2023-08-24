import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'

interface IMenu {
}

const Menu: FC<IMenu> = (props) => {
   const menuItems = ['#home', '#works', '#firstSection-me', '#contacts']

   const renderItems = () => (
      menuItems.map((item) => (
         <li key={item}>
            <a href={`${item.toLowerCase()}`}>{item}</a>
         </li>
      ))
   )

   return (
      <MenuStyled alignItems={'center'} justifyContent={'flex-end'} gap={'10px 32px'} as={'ul'}>
         {
            renderItems()
         }
      </MenuStyled>
   )
}

export default Menu

const MenuStyled = styled(FlexContainerStyled)`
  flex: 1;
`