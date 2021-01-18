import React, { createContext, useReducer } from 'react';
import TransactionReducer from "./transReducer";

const initialTransactions = [
    { id: 1, desc: "Cash", amount: 100000 },
    { id: 2, desc: "Cold Drink", amount: -50 },
    { id: 3, desc: "Deposit", amount: 100 },
    { id: 4, desc: "Books", amount: -200 },
]



export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
    function addTransaction(transaction) {
        dispatch({
            type: "ADD TRANSACTION",
            payload: transaction
        })
    }
    function delTransaction(id) {
        dispatch({
            type: "DEL TRANSACTION",
            payload: id
        });
    }
    function delAllTransaction() {
        dispatch({
            type: "DEL ALL TRANSACTION"
        }
        )
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction,
            delTransaction,
            delAllTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}