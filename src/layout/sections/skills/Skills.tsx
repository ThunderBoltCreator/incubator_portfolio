import {FC} from 'react'
import SvgIcon from '../../../components/svgIcon/SvgIcon'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import {SkillsStyled} from './Skills.styled'

interface ISkills {
}

const Skills: FC<ISkills> = (props) => {
   return (
      <SkillsStyled>
         <SectionTitle
            textAlign={'center'}
            tag={'h2'}
         >
            Skills
         </SectionTitle>
         <div>
            {/*<SvgIcon width={50} height={50} iconId="typescript"/>*/}
            {/*<SvgIcon width={50} height={50} iconId="react"/>*/}
            {/*<SvgIcon width={50} height={50} iconId="redux"/>*/}
            {/*<SvgIcon width={50} height={50} iconId="github"/>*/}
            {/*<SvgIcon width={50} height={50} iconId="tailwind"/>*/}
         </div>
      </SkillsStyled>
   )
}

export default Skills

