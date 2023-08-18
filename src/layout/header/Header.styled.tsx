import styled from 'styled-components'
import {appTheme} from '../../assets/styles/appTheme'

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  position: absolute;
  top: 0;
  padding: 10px 0;
  font-size: 24px;
  background-color: ${appTheme.color.reverse};

  display: flex;
  justify-content: space-between;
  align-items: center;
`