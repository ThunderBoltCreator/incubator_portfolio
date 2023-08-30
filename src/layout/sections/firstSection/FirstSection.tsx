import {FC} from 'react'
import Button from '../../../components/button/Button'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'
import {Title} from '../../../styledComponents/Title.styled'
import {FirstSectionStyled, DecorStyled, Link, TextBlock, ImageBox} from './FirstSection.styled'


import photoDesktop from '../../../assets/images/desktop_photo.webp'

interface IAbout {
}

const FirstSection: FC<IAbout> = (props) => {

   return (
      <section>
         <AppContainer>
            <FirstSectionStyled gap={'30px'} justifyContent={'space-between'} alignItems={'center'}>

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
                  <DecorStyled aria-hidden={true}>
                     <SvgIcon iconId={'logo_outlined'} width={155} height={155}/>
                  </DecorStyled>

                  <img src={photoDesktop} alt="Avatar"/>
                  <Link>
                     <DecorStyled/>
                     Currently working on
                     <a href="#works"> Portfolio</a>
                  </Link>
               </ImageBox>

            </FirstSectionStyled>


         </AppContainer>
      </section>

   )
}

export default FirstSection