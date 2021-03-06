import React, { useContext } from "react";
import {TransactionContext} from '../Context/transContext';



function Transaction ({ transaction, id }) {
    const { delTransaction } = useContext(TransactionContext);
    const sign = transaction.amount < 0 ? '-' : '+' ;
    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.desc}<span>{sign}${Math.abs(transaction.amount)}</span>
                <button onClick={() => delTransaction(transaction.id)} className="delete-btn">X</button>
            </li>
        </div>
    )
}


export default Transaction;