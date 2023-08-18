import {FC} from 'react'
import styled from 'styled-components'
import Button from '../../../components/button/Button'
import photo from '../../../assets/images/avatar.webp'

import triangle from '../../../assets/images/zdarova.svg'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'

interface IAbout {
}

const About: FC<IAbout> = (props) => {
   return (
      <AboutStyled justifyContent={'space-around'} alignItems={'center'}>
         <div className={'leftSide'}>
            <div className={'textBlock'}>
               <p>
                  Hello,<br/><span>I’m</span> <span>Daniella Adams</span>
               </p>
               <p>
                  I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less
                  interesting.
               </p>
            </div>
            <Button>Download CV</Button>
         </div>
         <div className="rightSide">
            <div className="imageBox">
               <img src={photo} alt="Avatar"/>
            </div>
         </div>
      </AboutStyled>
   )
}

export default About

const AboutStyled = styled(FlexContainerStyled)`
  padding: 100px 0 0;
  margin-bottom: 200px;


  > div {
    width: 50%;
  }

  .leftSide {
    text-align: left;

    .textBlock {
      max-width: 480px;

      p + p {
        margin-top: 7px;
        font-size: 24px;
        margin-bottom: 35px;
      }

      span {
        font-size: 50px;
      }

      span + span {
        color: #FB3F5C;
      }
    }
  }

  .rightSide {

    .imageBox {
      max-width: 432px;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        right: -60px;
        bottom: -46px;
        width: 503px;
        height: 537px;
        z-index: -1;
        background: url(${triangle}) 0;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }
    }
  }
`