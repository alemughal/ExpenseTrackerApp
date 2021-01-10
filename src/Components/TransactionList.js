import React, { useContext } from 'react';
import { TransactionContext } from '../Context/transContext';

function TransactionList() {

    let {transactions} = useContext(TransactionContext);
    console.log(transactions)
    return (
        <div className="trans">
            <h3>History</h3>
            <ul className="list" >
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind} className={(transObj.amount > 0) ? 'plus' : 'minus'}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>
            <button className='clear-btn'>Clear All</button>
        </div>
    )
}

export default TransactionList;
