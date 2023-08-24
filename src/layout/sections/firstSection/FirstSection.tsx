import {FC} from 'react'
import photo from '../../../assets/images/myPhoto.webp'
import Button from '../../../components/button/Button'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import {FirstSectionStyled} from './FirstSection.styled'
import svg from '../../../assets/images/logoOutlined.svg'

interface IAbout {
}

const FirstSection: FC<IAbout> = (props) => {
   return (
      <FirstSectionStyled as={'section'} gap={'30px'} alignItems={'center'}>
         <div className={'textBlock'}>
            <h1>
               Elias is a <span>front-end developer</span>
            </h1>
            <p>
               He crafts responsive websites where technologies meet creativity
            </p>
            <Button>Contact me!!</Button>
         </div>
         <div className="imageBox">
            <div className={'decor'}>
               <SvgIcon iconId={'logo_outlined'} width={155} height={155}/>
            </div>
            <img src={photo} alt="Avatar"/>
            <div className={'link'}>
               <div></div>
               Currently working on
               <a href="#works"> Portfolio</a>
            </div>
         </div>
      </FirstSectionStyled>
   )
}

export default FirstSection
