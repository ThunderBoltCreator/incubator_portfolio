import {FC} from 'react'
import sprite from '../../assets/images/sprite.svg'

interface ISvgIcon {
   iconId: 'typescript' | 'redux' | 'github' | 'react' | 'tailwind'
   width?: string | number
   height?: string | number
}

const svgViewBox = {
   typescript: '0 0 120 120',
   redux: '0 0 120 120',
   github: '0 0 88 88',
   react: '0 0 120 120',
   tailwind: '0 0 131 131'
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