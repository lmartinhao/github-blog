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
  width: 891px;
  height: 52px;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 235px;

  background: #14589c;
  filter: blur(106px);
`

export const EffectImage1 = styled.div`
  position: absolute;
  width: 409px;
  height: 188px;
  left: 0px;
  top: 70px;
`
export const EffectImage2 = styled.div`
  position: absolute;
  width: 371px;
  height: 236px;
  left: 1067px;
  top: 30px;
`
export const EffectCircle1 = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: -130px;
  top: -96px;

  background: #14589c;
  filter: blur(200px);
`
export const EffectCircle2 = styled.div`
  position: absolute;
  width: 155.25px;
  height: 155.25px;
  right: -15.43px;
  top: -52.14px;

  background: #14589c;
  filter: blur(184px);
  transform: rotate(15deg);
`
