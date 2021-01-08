import React, { createContext } from 'react';
import TransactionReducer from "./transReducer";

const transactions = [
    { amount: 2000, desc: "Cash" },
    { amount: -70, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Books" },
]

export const TransactionContext = createContext(transactions);

