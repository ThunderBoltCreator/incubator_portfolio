import styled, {css} from 'styled-components'

interface IAppContainer {
   marginBot?: number
   marginTop?: number
   relative?: boolean
}

export const AppContainer = styled.div<IAppContainer>`
  max-width: 1100px;
  margin: ${props => props.marginTop || 0}px auto ${props => props.marginBot || 0}px;
  padding: 0 20px;
  ${props => props.relative && css`
    position: relative;
  `}
`