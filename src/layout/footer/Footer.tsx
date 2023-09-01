import {FC} from 'react'
import styled from 'styled-components'
import SvgIcon from '../../components/svgIcon/SvgIcon'
import {Title} from '../../components/title/Title'
import {AppContainer} from '../../styledComponents/AppContainer.styled'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'

interface IFooter {
}

export const Footer: FC<IFooter> = (props) => {
   return (
      <StyledFooter>
         <FooterContainer>
            <FooterBody justifyContent={'space-between'}>
               <Info>
                  <InfoTop alignItems={'center'}>
                     <SvgIcon width={16} height={16} iconId={'logo'}/>
                     <Title mr={'24px'} tag={'h6'}>Elias</Title>
                     <span>elias@elias-dev.ml</span>
                  </InfoTop>
                  <span>Web designer and front-end developer</span>
               </Info>
               <Socials>
                  <Title tag={'h3'} fontSize={'24px'} fontWeight={500}>Media</Title>
                  <SocialItems>
                     <SvgIcon width={32} height={32} iconId={'github'}/>
                     <SvgIcon width={32} height={32} iconId={'figma'}/>
                     <SvgIcon width={32} height={32} iconId={'discord'}/>
                  </SocialItems>
               </Socials>
            </FooterBody>
            <Copyright>© Copyright 2022. Made by Elias</Copyright>
         </FooterContainer>
      </StyledFooter>
   )
}

const FooterContainer = styled(AppContainer)`
  border-top: 1px solid ${props => props.theme.color.primary};
`
const FooterBody = styled(FlexContainerStyled)`
  margin: 32px 0 48px;
`
const Info = styled.div``
const InfoTop = styled(FlexContainerStyled)`
  margin-bottom: 16px;

  h6 {
    font-size: 16px;
    font-weight: 500;
  }

  svg {
    margin-right: 9px;
  }

  span {

  }
`
const Socials = styled.div``
const SocialItems = styled.div`
  svg + svg {
    margin-left: 8px;
  }
`
const Copyright = styled.a`
  display: block;
  text-align: center;
`
const StyledFooter = styled.footer`
  padding-bottom: 32px;
`