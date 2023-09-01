import {FC} from 'react'
import Button from '../../../components/button/Button'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'

import {FirstSectionStyled, DecorStyled, FirstLink} from './FirstSection.styled'


import photoDesktop from '../../../assets/images/desktop_photo.webp'
import {ImageBox, TextBlock} from '../../../styledComponents/Common.styled'
import {Title} from '../../../components/title/Title'

interface IAbout {
}

const FirstSection: FC<IAbout> = (props) => {

   return (
      <AppContainer marginTop={60} marginBot={110} as="section">
         <FirstSectionStyled
            gap={'30px'}
            justifyContent={'space-between'}
            alignItems={'center'}
         >

            <TextBlock>
               <Title>
                  Elias is a <span>front-end developer</span>
               </Title>
               <Paragraph lineHeight={1.56}>
                  He crafts responsive websites where technologies meet creativity
               </Paragraph>
               <Button>Contact me!!</Button>
            </TextBlock>

            <ImageBox>
               <DecorStyled aria-hidden>
                  <SvgIcon iconId={'logo_outlined'} width={155} height={155}/>
               </DecorStyled>

               <img src={photoDesktop} alt="Avatar"/>
               <FirstLink>
                  <DecorStyled/>
                  Currently working on
                  <a href="#works"> Portfolio</a>
               </FirstLink>
            </ImageBox>

         </FirstSectionStyled>
      </AppContainer>
   )
}

export default FirstSection