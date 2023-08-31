import React, {FC} from 'react'
import styled from 'styled-components'
import {Title} from "../../../components/title/Title";


interface IContactProps {

}

export const Contact: FC<IContactProps> = (props) => {
   return (
      <ContactStyled>
         <Title>Contact me</Title>
      </ContactStyled>
   )
}

const ContactStyled = styled.section`

`