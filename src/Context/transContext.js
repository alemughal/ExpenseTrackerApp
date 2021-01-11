import React, { createContext, useReducer } from 'react';
import TransactionReducer from "./transReducer";

const initialTransactions = [
    { id: 1 , amount: 2000, desc: "Cash" },
    { id: 2 , amount: -50, desc: "Cold Drink" },
    { id: 3 , amount: 100, desc: "Deposit" },
    { id: 4 , amount: -200, desc: "Books" },
]


export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({ children }) => {
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
    function delTransaction (id) {
        dispatch({
            type:"DEL TRANSACTION",
            payload: id
        });
    }
    function delAllTransaction() {
        dispatch ({
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