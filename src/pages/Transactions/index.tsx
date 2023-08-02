import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summery";
import { SearchForm } from "./components/SearchForm";

import {
  TransactionContainer,
  TransactionTable,
  PriceHighlight,
} from "./styled";
import { dataFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />

        <TransactionTable>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dataFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
