import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = ({expenses})=>{
    const [filteredYear, setFilteredYear] = useState('2021')


    const filterYearHandler = (year)=>{
        setFilteredYear(year)
    }

    const filterExpenses = expenses.filter(item =>{
        return item.date.getFullYear().toString() === filteredYear
    })


    return(
        <Card className="expenses">
            <ExpenseFilter filterYear={filteredYear} onChangeFilteredYear = {filterYearHandler}/>
            {filterExpenses.map(item=>{
            return <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
          })}
        </Card>
        
        
    )
}

export default Expenses