import {useState} from 'react'
import {FC} from 'react'
import {keyframes} from 'styled-components'
import styled from 'styled-components'
import {fadeOut} from '../../assets/styles/animation'
import {fadeIn} from '../../assets/styles/animation'
import {Header} from '../../layout/header/Header'
import {FlexContainerStyled} from '../../styledComponents/FlexContainer.styled'
import SvgIcon from '../svgIcon/SvgIcon'

import * as S from '@radix-ui/react-select'

interface ILangSwitcher {
}

type LanguageType = 'EN' | 'RU'

export const LangSwitcher: FC<ILangSwitcher> = (props) => {
   const [language, setLanguage] = useState<LanguageType>('EN')
   const [isOpen, setIsOpen] = useState(false)

   // console.log('isOpen', isOpen)
   // console.log('language', language)

   return (
      <LangSwitcherStyled alignItems={'center'}>
         <S.Root
            onOpenChange={(open) => setIsOpen(open)}
            onValueChange={(value) => setLanguage(value as LanguageType)}
            value={language}
            // open={true}
            open={isOpen}
         >
            <S.Trigger className={'select_button'}>
               <S.Value className={'select_placeholder'} placeholder={language}>
                  <span>{language}</span>
               </S.Value>
               <S.Icon className={'switch_icon'}>
                  <SvgIcon width={10} height={5} iconId={'arrowDown'}/>
               </S.Icon>
            </S.Trigger>


            <S.Content
               position={'popper'}
               className={'select_content'}
               sideOffset={5}
            >
               <S.Viewport>
                  <S.Item className={'select_item'} value={'RU'}>
                     RU
                  </S.Item>
                  <S.Item className={'select_item'} value={'EN'}>
                     EN
                  </S.Item>
               </S.Viewport>
            </S.Content>
         </S.Root>
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


    &[data-state='open'] {
      > span:nth-child(1) {
        opacity: 0.2;
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
    //position: relative;
    //top: 40px;
    cursor: pointer;

    .select_item {
      outline: none;
      line-height: 1;

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

