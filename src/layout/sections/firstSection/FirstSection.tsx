import {FC} from 'react'
import styled from 'styled-components'
import Button from '../../../components/button/Button'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import {ImageBoxStyled} from '../../../styledComponents/ImageBox.styled'
import {Paragraph} from '../../../styledComponents/Paragraph.styled'
import {TextBlockContainer} from '../../../styledComponents/TextBlockContainer.styled'
import {Title} from '../../../styledComponents/Title.styled'
import {FirstSectionStyled, DecorStyled, LinkStyled} from './FirstSection.styled'


import photo from '../../../assets/images/myPhoto.webp'

interface IAbout {
}

const FirstSection: FC<IAbout> = (props) => {
   console.log(photo)

   return (
      <section>
         <AppContainer>


            <FirstSectionStyled gap={'30px'} justifyContent={'space-between'} alignItems={'center'}>

               <TextBlockContainer maxWidth={'500px'}>
                  <Title>
                     Elias is a <span>front-end developer</span>
                  </Title>
                  <Paragraph lineHeight={1.56}>
                     He crafts responsive websites where technologies meet creativity
                  </Paragraph>
                  <Button>Contact me!!</Button>
               </TextBlockContainer>

               <ImageBoxStyled>
                  <DecorStyled aria-hidden={true}>
                     <SvgIcon iconId={'logo_outlined'} width={155} height={155}/>
                  </DecorStyled>

                  {/*<ImageBgStyled photo={photo}/>*/}

                  <img src={photo} alt="Avatar"/>
                  <LinkStyled>
                     <DecorStyled/>
                     Currently working on
                     <a href="#works"> Portfolio</a>
                  </LinkStyled>
               </ImageBoxStyled>

            </FirstSectionStyled>


         </AppContainer>
      </section>

   )
}

export default FirstSection


interface IImageBgStyled {
   photo: string
}

const ImageBgStyled = styled.div<IImageBgStyled>`
  background-image: url(${props => props.photo});
`