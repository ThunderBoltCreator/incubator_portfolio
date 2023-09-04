import {useState} from 'react'
import {FC} from 'react'
import {keyframes} from 'styled-components'
import styled from 'styled-components'
import {fadeOut} from '../../assets/styles/animation'
import {fadeIn} from '../../assets/styles/animation'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'
import SvgIcon from '../svgIcon/SvgIcon'

import * as Select from '@radix-ui/react-select'

interface ILangSwitcher {
}

type LanguageType = 'EN' | 'RU'

export const LangSwitcher: FC<ILangSwitcher> = (props) => {
   const [language, setLanguage] = useState<LanguageType>('EN')
   const [isOpen, setIsOpen] = useState(false)

   console.log('isOpen', isOpen)
   console.log('language', language)

   return (
      <LangSwitcherStyled alignItems={'center'}>
         <Select.Root
            onOpenChange={(open) => setIsOpen(open)}
            onValueChange={(value) => setLanguage(value as LanguageType)}
            value={language}
            open={true}
         >
            <Select.Trigger>
               <Select.Value placeholder={language}>
                  <span>{language}</span>
               </Select.Value>
               <Select.Icon className={'switch_icon'}>
                  <SvgIcon width={10} height={5} iconId={'arrowDown'}/>
               </Select.Icon>
            </Select.Trigger>
            <Select.Content className={'select_content'}>
               <Select.Item className={'select_item'} value={'RU'}>
                  RU
               </Select.Item>
               <Select.Item className={'select_item'} value={'EN'}>
                  EN
               </Select.Item>
            </Select.Content>
         </Select.Root>
      </LangSwitcherStyled>
   )
}


const LangSwitcherStyled = styled(FlexContainerStyled)`
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    outline: none;
    cursor: pointer;

    [data-state='open'] {
      .switch_placeholder {
        opacity: 0;
      }
    }

    .switch_icon {
      display: flex;
      align-items: center;

      svg {
        transition: .3s ease;
      }
    }

    &[data-state='open'] {

      .switch_icon {

        svg {
          transform: rotate(180deg);
        }
      }
    }
  }

  .select_content {
    position: relative;
    top: 40px;
    cursor: pointer;


    .select_item {
      outline: none;

      &:hover {
        color: #FFF;
      }
    }

    &[data-state='open'] {
      animation: ${fadeIn} 300ms ease;
    }

    &[data-state='close'] {
      animation: ${fadeOut} 300ms ease;
    }
  }
`

