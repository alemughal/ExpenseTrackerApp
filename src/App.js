import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
// import Transaction from './Components/Transaction';
import AddTransaction from './Components/AddTransaction';
import { TransactionProvider } from './Context/transContext';


function App() {
    return (
        <TransactionProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransactionList />
                {/* <Transaction /> */}
                <AddTransaction />
            </div>
        </TransactionProvider>
    )
}

export default App;