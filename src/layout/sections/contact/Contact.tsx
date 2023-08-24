import React, {FC} from 'react'
import styled from 'styled-components'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'

interface IContactProps {

}

export const Contact: FC<IContactProps> = (props) => {
   return (
      <ContactStyled>
         <SectionTitle textAlign={'center'} tag={'h2'}>Contact me</SectionTitle>
      </ContactStyled>
   )
}

const ContactStyled = styled.section`

`