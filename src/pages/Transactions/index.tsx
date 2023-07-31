import { Header } from "../../components/Header";
import { Summary } from "../../components/Summery";
import { SearchForm } from "./components/SearchForm";

import { TransactionContainer, TransactionTable, PriceHighlight } from "./styled";


export function Transactions() {
  return (
    <div>
      <Header/>
      <Summary/>

      <TransactionContainer>
        <SearchForm/>

        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvedor de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>vendas</td>
              <td>13/06/2022</td>
            </tr>
            <tr>
              <td width="50%">Hanburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 59,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/06/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}