import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData })=>{
    const [title , setTitle] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')

    const titleChangeHandler = (e)=>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }

    const dateChangeHandler =(e)=>{
        // console.log(e.target.value)
        setDate(e.target.value)
    }

    const amountChangeHandler = (e)=>{
        // console.log(e.target.value)
        setAmount(e.target.value)
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault()

        const expenseData = {
            title: title,
            date: new Date(date),
            amount: amount
        }


        onSaveExpenseData(expenseData)

        setTitle('')
        setDate('')
        setAmount('')
    }
    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" value={date} onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm