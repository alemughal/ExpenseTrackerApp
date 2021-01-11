import React, { useContext } from 'react';
import { TransactionContext } from '../Context/transContext';

function Balance() {
    const { transactions } = useContext(TransactionContext)
    const amounts = transactions.map(transaction => transaction.amount);
    const Balance = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <div>
            <h4> YOUR BALANCE </h4>
            <h1> ${Balance}</h1>
        </div>
    )
}

export default Balance;