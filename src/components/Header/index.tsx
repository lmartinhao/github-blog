import { EffectRectangle, HeaderContainer } from "./styles";
import Logo from '../../assets/Logo.svg'

export function Header() {
  return(
    <HeaderContainer>
      <img src={Logo} alt='' />
      <EffectRectangle />
    </HeaderContainer>
  )
}
