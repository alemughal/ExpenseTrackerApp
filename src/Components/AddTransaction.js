import React from 'react';


function AddTransaction() {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label> Text </label>
                    <input type="text" placeholder="Enter Description" required />
                </div>
                <div className="form-control">
                    <label> Amount <br /> (Negative- = Expense, Positive+ = Income)</label>
                    <input type="number" placeholder="Enter Amount" required  />
                </div>
                <button type="submit" className="btn">Add Transaction</button>
            </form>
        </div>
    )
}


export default AddTransaction;