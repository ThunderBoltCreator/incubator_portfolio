import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'

interface IMenu {
}

export const menuItems = ['#home', '#projects', '#about-me', '#contacts']

const Menu: FC<IMenu> = (props) => {

   const renderItems = () => (
      menuItems.map((item) => (
         <li key={item}>
            <a href={`${item.toLowerCase()}`}>{item}</a>
         </li>
      ))
   )

   return (
      <MenuStyled wrap={'wrap'} alignItems={'center'} justifyContent={'flex-end'} gap={'10px 32px'} as={'ul'}>

         {
            renderItems()
         }

      </MenuStyled>
   )
}

export default Menu

const MenuStyled = styled(FlexContainerStyled)`
  flex: 1;

  a {
    transition: color .3s ease;
  }

  a:hover {
    color: #FFF;
  }
`