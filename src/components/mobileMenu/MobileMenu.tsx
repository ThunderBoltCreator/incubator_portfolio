import {FC} from 'react'
import styled from 'styled-components'

interface IMobileMenu {
}

export const MobileMenu: FC<IMobileMenu> = (props) => {
   return (
      <MobileMenuStyled>MobileMenu</MobileMenuStyled>
   )
}

const MobileMenuStyled = styled.div``