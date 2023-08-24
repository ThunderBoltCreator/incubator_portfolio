import {FC} from 'react'
import SvgIcon from '../svgIcon/SvgIcon'
import {LogoStyled} from './Logo.styled'

interface ILogo {
}

const Logo: FC<ILogo> = (props) => {
   return (
      <LogoStyled href="#">
         <SvgIcon width={16} height={16} iconId={'logo'}/>
         <span>Elias</span>
      </LogoStyled>
   )
}

export default Logo

