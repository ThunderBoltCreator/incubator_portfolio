import {FC} from 'react'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import {FlexContainerStyled} from '../../../styledComponents/FlexContainer.styled'

import {SkillsStyled} from './Skills.styled'
import {Title} from '../../../components/title/Title'
import {AppContainer} from '../../../styledComponents/AppContainer.styled'

interface ISkills {
}

const Skills: FC<ISkills> = (props) => {
   return (
      <SkillsStyled>
         <AppContainer>
            <Title
               tag={'h2'}
               mb="40px"
               decorWidth={'24%'}
               decor
               sharp
            >
               skills
            </Title>
            <FlexContainerStyled wrap={'wrap'} justifyContent={'space-around'} gap={'10px 60px'}>
               <SvgIcon width={100} height={100} iconId="typescript"/>
               <SvgIcon width={100} height={100} iconId="react"/>
               <SvgIcon width={100} height={100} iconId="redux"/>
               <SvgIcon width={100} height={100} iconId="github"/>
               <SvgIcon width={100} height={100} iconId="tailwind"/>
            </FlexContainerStyled>
         </AppContainer>
      </SkillsStyled>
   )
}

export default Skills

