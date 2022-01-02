import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({expense}) {

  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle('updated!');
  }

  return (
    <div className='expense-item'>
      <ExpenseDate date={expense.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
}

export default ExpenseItem;