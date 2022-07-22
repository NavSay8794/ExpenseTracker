import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = ({ onNewExpense })=>{

    const saveExpenseHandler = (enteredExpense)=>{
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }

        onNewExpense(expenseData)
        console.log(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    )
}

export default NewExpense