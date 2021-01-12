import React, { useContext } from 'react'
import Transaction from './Transaction'
import { TransactionContext } from '../Context/transContext'

function TransactionList() {

    const { transactions, delAllTransaction } = useContext(TransactionContext);
    console.log(transactions)
    return (
        <div className="trans">
            <h3>History</h3>

            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id}  transaction={transaction} />))}
            </ul>

            <button onClick={() => delAllTransaction()} className='clear-btn'>Clear All</button>
        </div>
    )
}

export default TransactionList