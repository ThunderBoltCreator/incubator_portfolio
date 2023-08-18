import {FC} from 'react'
import styled from 'styled-components'

interface IMenu {
}

const Menu: FC<IMenu> = (props) => {
   const menuItems = ['About', 'Skills', 'Latest work', 'Contact']

   const renderItems = () => (
      menuItems.map((item) => (
         <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
         </li>
      ))
   )

   return (
      <MenuStyled>
         <ul>
            {
               renderItems()
            }
         </ul>
      </MenuStyled>
   )
}

export default Menu

const MenuStyled = styled.div`
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    li + li {
      margin-left: 20px;
    }
  }
`