import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["blue-800"]};
  width: 100%;
  height: 18.5rem;
  text-align: center;
  padding-top: 4rem;
`

export const EffectRectangle = styled.div`
position: absolute;
width: 891px;
height: 52px;
left: calc(50% - 891px/2 - 2.5px);
top: 235px;

background: #14589C;
filter: blur(106px);
`
