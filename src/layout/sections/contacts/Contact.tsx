import React, {FC} from 'react'
import styled from 'styled-components'
import {Title} from '../../../components/title/Title'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'

import DiscordSvg from '../../../assets/images/icons/discord.svg'
import EmailSvg from '../../../assets/images/icons/email.svg'


interface IContactProps {

}

export const Contact: FC<IContactProps> = (props) => {
   return (
      <ContactStyled>
         <AppContainer>
            <Title mb={'45px'} tag={'h2'} sharp decor decorWidth={'13%'}>contacts</Title>
            <FlexContainerStyled justifyContent={'space-between'}>
               <ContactDescription>
                  I’m interested in freelance opportunities. However, if you have other request or question, don’t
                  hesitate to contact me
               </ContactDescription>
               <ContactInfoBox>
                  <span>Message me here</span>
                  <ContactLinks>
                     <a href="#">!Elias#3519</a>
                     <a href="#">elias@elias.me</a>
                  </ContactLinks>
               </ContactInfoBox>
            </FlexContainerStyled>
         </AppContainer>
      </ContactStyled>
   )
}

const ContactStyled = styled.section`
  margin-bottom: 145px;
`

const ContactInfoBox = styled.div`
  padding: 16px;
  border: 1px solid ${props => props.theme.color.primary};

  span {
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.color.secondary};
  }
`
const ContactDescription = styled.p`
  max-width: 500px;
`
const ContactLinks = styled.div`
  margin-top: 16px;

  a {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 400;

    & + a {
      margin-top: 8px;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 32px;
      height: 32px;
    }

    &:nth-child(1)::before {
      background: url(${DiscordSvg});
    }

    &:nth-child(2)::before {
      background: url(${EmailSvg});
    }

  }
`