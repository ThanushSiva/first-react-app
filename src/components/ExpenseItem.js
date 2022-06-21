// import { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <div>{props.title}</div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button>change title</button>
        </div>
    );
}

export default ExpenseItem;