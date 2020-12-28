import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';


function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </div>
  );
}

export default App;
