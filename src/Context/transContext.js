import React, { createContext } from 'react';

const transactions = [
    { amount: 1000, desc: "Cash" },
    { amount: -50, desc: "Cold Drink" },
    { amount: 100, desc: "Deposit" },
    { amount: -200, desc: "Books" },
]

export const transContext = createContext(transactions);

