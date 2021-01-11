const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD TRANSACTION":
            return [action.payload, ...state]
        case "Delete_Transaction":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !==
                    action.payload)
            }
        default:
            return state;
    }
})


export default TransactionReducer;