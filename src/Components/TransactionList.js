import React from 'react';

function TransactionList() {
    return (
        <div className="trans">
            <h3>History</h3>
            <ul className="list">
                <li className="plus">
                    Cash
                <span> $500 </span>
                <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Cold Drink
                <span>-$50</span>
                <button className="delete-btn">X</button>
                </li>
               
                <li className="plus">
                    Deposit
                <span> $100</span>
                <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Books
                <span> -$200</span>
                <button className="delete-btn">X</button>
                </li>
            </ul>
            <button className='clear-btn'>Clear All</button>
        </div>
    )
}

export default TransactionList;
