import {FC} from 'react'
import {LogoStyled} from './Logo.styled'

interface ILogo {
}

const Logo: FC<ILogo> = (props) => {
   return (
      <LogoStyled>
         <a href="#">Logo</a>
      </LogoStyled>
   )
}

export default Logo

