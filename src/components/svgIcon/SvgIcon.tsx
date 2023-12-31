import {FC} from 'react'
import sprite from '../../assets/images/icons/sprite.svg'

interface ISvgIcon {
   iconId: 'typescript' | 'redux' | 'github' | 'react' | 'tailwind' | 'logo' | 'arrowUp' | 'logo_outlined' | 'figma' | 'discord' | 'arrowDown'
   width?: string | number
   height?: string | number
}

const svgViewBox = {
   logo_outlined: '0 0 156 156',
   arrowDown: '0 0 10 7',
   logo: '0 0 16 17',
   typescript: '0 0 120 120',
   redux: '0 0 120 120',
   github: '0 0 32 32',
   react: '0 0 120 120',
   tailwind: '0 0 131 131',
   figma: '0 0 32 32',
   discord: '0 0 32 32',
   arrowUp: '0 0 10 7'
}

const SvgIcon: FC<ISvgIcon> = (props) => {
   const {iconId, width, height} = props
   return (
      <svg width={width || 100} height={height || 100} viewBox={svgViewBox[iconId]}
           xmlns="http://www.w3.org/2000/svg"
           fill="none">
         <use xlinkHref={`${sprite}#${iconId}`}/>
      </svg>
   )
}

export default SvgIcon