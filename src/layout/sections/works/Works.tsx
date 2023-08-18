import {FC} from 'react'
import styled from 'styled-components'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'

import cls from './works.module.scss'

interface IWorks {
}

const Works: FC<IWorks> = (props) => {
   return (
      <StyledWork wrap={'wrap'} as={'section'}>Works</StyledWork>
   )
}

export default Works

const StyledWork = styled(FlexContainerStyled)`

`