import React , { useState }from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ date, title, amount }) => {
    const [itemTitle , setItemTitle] = useState(title)

    const clickHandler = ()=>{
        setItemTitle('Updated Title')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date = {date}/>
            <div className='expense-item__description'>
                <h2>
                    {itemTitle}
                </h2>
            </div>
            <div className='expense-item__price'>
                Rs {amount}
            </div>
            <button onClick={clickHandler}>Click Me</button>
        </Card>
    )
}

export default ExpenseItem