import React, { useContext } from 'react';
import { TransactionContext } from '../Context/transContext';

function IncomeExpense() {
    let { transactions } = useContext(TransactionContext);
    const getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += transactions[i].amount
            }
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += transactions[i].amount
            }
        }
        return (expense);
    }
    return (
        <div className="inc-exp-container">
            <div className="money">
                <h4>Income</h4>
                <p className="money-plus">{getIncome()}</p>
            </div>
            <div className="money">
                <h4>Expense</h4>
                <p className="money-minus">{getExpense()}</p>
            </div>
        </div>
    )
}



export default IncomeExpense;
