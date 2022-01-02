import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({expenses}) => {
    return (
        <div>
            {expenses.map((expense) => (
                <div className='expenses' key={expense.id}>
                    <ExpenseItem expense={expense} /> 
                </div>
            ))}
        </div>
    )
}

export default Expenses
