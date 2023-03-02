import {
  EffectCircle1,
  EffectCircle2,
  EffectImage1,
  EffectImage2,
  EffectRectangle,
  HeaderContainer,
} from './styles'
import Logo from '../../assets/Logo.svg'
import Effect1 from '../../assets/effect1.svg'
import Effect2 from '../../assets/effect2.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <EffectImage1>
        <img src={Effect1} alt="" />
      </EffectImage1>
      <EffectImage2>
        <img src={Effect2} alt="" />
      </EffectImage2>

      <EffectRectangle />
      <EffectCircle1 />
      <EffectCircle2 />
    </HeaderContainer>
  )
}
