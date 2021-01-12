import React, { useContext, useState } from 'react';
import { TransactionContext } from '../Context/transContext';

function AddTransaction() {
    let {addTransaction} = useContext(TransactionContext)
    let [newAmount, setAmount] = useState(0);
    let [newDesc, setDesc] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        addTransaction({
            desc: newDesc,
            amount: Number(newAmount)
        
        })
        console.log(newDesc, newAmount)
        setDesc("")
        setAmount("")
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleClick}>
                <div className="form-control">
                    <label> Text </label>
                    <input type="text" placeholder="Enter Description" value={newDesc} onChange={(ev) => setDesc(ev.target.value)} required/>
                </div>
                <div className="form-control">
                    <label> Amount <br /> (Negative- = Expense, Positive+ = Income)</label>
                    <input type="number" placeholder="Enter Amount" value={newAmount} onChange={(ev) => setAmount(ev.target.value)} required/>
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}


export default AddTransaction;