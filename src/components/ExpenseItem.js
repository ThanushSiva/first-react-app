import { useState } from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    
    const [title,setTitle] = useState(props.title)
    const clickHandler = () => {
        setTitle("updated");
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <div>{title}</div>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </div>
    );
}

export default ExpenseItem;