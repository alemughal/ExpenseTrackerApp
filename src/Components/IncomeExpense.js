import React from 'react';

function IncomeExpense() {
    return (
        <div className="inc-exp-container">
            <div className="money">
                <h4>Income</h4>
                <p className="money-plus">+$600</p>
            </div>
            <div className="money">
                <h4>Expense</h4>
                <p className="money-minus">-$200</p>
            </div>
        </div>
    )
}



export default IncomeExpense;