import {FC} from 'react'
import SvgIcon from '../../../components/svgIcon/SvgIcon'

import {SkillsStyled} from './Skills.styled'
import {Title} from "../../../components/title/Title";
import {AppContainer} from "../../../styledComponents/AppContainer.styled";

interface ISkills {
}

const Skills: FC<ISkills> = (props) => {
   return (
      <AppContainer>
         <Title decor sharp decorWidth={'24%'}>
            Skills
         </Title>
         <div>
            <SvgIcon width={50} height={50} iconId="typescript"/>
            <SvgIcon width={50} height={50} iconId="react"/>
            <SvgIcon width={50} height={50} iconId="redux"/>
            <SvgIcon width={50} height={50} iconId="github"/>
            <SvgIcon width={50} height={50} iconId="tailwind"/>
         </div>
      </AppContainer>
   )
}

export default Skills

