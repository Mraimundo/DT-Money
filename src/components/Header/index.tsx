import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransationButton } from "./styled";
import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova Transação</NewTransationButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
