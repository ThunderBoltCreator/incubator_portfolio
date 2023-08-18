import {ReactNode} from 'react'
import {FC} from 'react'
import {ContainerStyled} from '../../styledComponents/Container.styled'
import {ContentStyled} from './Content.styled'

interface IContent {
   children: ReactNode
}

const Content: FC<IContent> = (props) => {
   const {children} = props
   return (
      <ContainerStyled>
         <ContentStyled>
            {children}
         </ContentStyled>
      </ContainerStyled>
   )
}

export default Content

