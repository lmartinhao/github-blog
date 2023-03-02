import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-800']};
  width: 100%;
  height: 18.5rem;
  text-align: center;
  padding-top: 4rem;

  white-space: nowrap;
  overflow: hidden;
`

export const EffectRectangle = styled.div`
  width: 55.688rem;
  height: 3.481rem;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 14.688rem;

  background: #14589c;
  filter: blur(106px);
`

export const EffectImage1 = styled.div`
  position: absolute;
  width: 25.563rem;
  height: 11.75rem;
  left: 0px;
  top: 4.375rem;
`
export const EffectImage2 = styled.div`
  position: absolute;
  width: 23.188rem;
  height: 14.75rem;
  left: 66.688rem;
  top: 1.875rem;
`
export const EffectCircle1 = styled.div`
  position: absolute;
  width: 14.75rem;
  height: 14.75rem;
  left: -8.125rem;
  top: -6rem;

  background: #14589c;
  filter: blur(200px);
`
export const EffectCircle2 = styled.div`
  position: absolute;
  width: 9.703rem;
  height: 9.703rem;
  right: -0.964rem;
  top: -3.259rem;

  background: #14589c;
  filter: blur(184px);
  transform: rotate(15deg);
`
