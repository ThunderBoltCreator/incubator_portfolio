import {FC} from 'react'
import styled from 'styled-components'
import {Title} from '../../../components/title/Title'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import {ImageBox} from '../../../styledComponents/Common.styled'
import {TextBlock} from '../../../styledComponents/Common.styled'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'

import photo from '../../../assets/images/about-me.webp'

interface IAboutMe {
}

export const AboutMe: FC<IAboutMe> = (props) => {
   return (
      <AboutMeStyled>
         <AppContainer>
            <FlexContainerStyled wrap={'wrap'} gap={'50px'} justifyContent={'space-between'} alignItems={'center'}>
               <AboutLeft>
                  <Title tag={'h2'} nowrap mb={'25px'} decor sharp decorWidth={'100%'}>about-me</Title>
                  <TextBlock>
                     <span>Hello, i’m Elias!</span>
                     <p>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites
                        from scratch and raise them into modern user-friendly web experiences.
                     </p>
                     <p>
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I
                        have been helping various clients to establish their presence online. I always strive to learn
                        about the newest technologies and frameworks.
                     </p>
                  </TextBlock>
               </AboutLeft>
               <AboutRight>
                  <ImageBox>
                     <img src={photo} alt="My Photo"/>
                  </ImageBox>
               </AboutRight>
            </FlexContainerStyled>
         </AppContainer>
      </AboutMeStyled>
   )
}

const AboutLeft = styled.div`
  min-width: 360px;
  max-width: 500px;
  flex: 1 1 360px;
`
const AboutRight = styled.div`
`

const AboutMeStyled = styled.section`
  margin-bottom: 120px;

  ${FlexContainerStyled} {
    width: 100%;
  }

  ${TextBlock} {
    span {
      display: inline-block;
      margin-bottom: 30px;
    }

    p + p {
      margin-top: 30px;
    }
  }

  ${ImageBox} {
    max-width: 340px;
    flex: 0 0 340px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`