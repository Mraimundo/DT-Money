import { HeaderContainer, HeaderContent, NewTransationButton } from "./styled";
import logoImg from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransationButton>Nova Transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  )
}