import React , {useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummy_expenses = [
  {
    id:1,
    title: 'Bike Insurance',
    amount : 2000,
    date : new Date(2021, 7, 22)
  },
  {
    id:2,
    title: 'Endoscopy',
    amount : 5000,
    date : new Date(2022, 6, 12)
  },
  {
    id:3,
    title: 'Watch Order',
    amount : 14000,
    date : new Date(2023, 2, 10)
  }
]

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses)

  
  const newExpenseHandler = (newExpense)=>{
    setExpenses((prevState)=>{
      return [newExpense,...prevState ]
    })
  }
  return (
    <div className="App">
      <NewExpense onNewExpense = {newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
