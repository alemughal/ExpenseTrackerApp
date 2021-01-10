import React, { createContext, useReducer } from 'react';
import TransactionReducer from "./transReducer";

const initialTransactions = [
    { amount: 2000, desc: "Cash" },
    { amount: -70, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Books" },
]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function addTransaction(transObj) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },

        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions : state,
            addTransaction : addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}