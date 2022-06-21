import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css'

function NewExpense(props) {
    const [toggle, setToggle] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseDate
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
    }
    const formVisiblity = () => {
        setToggle(!toggle)
    }
    const cancelToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='new-expense'>
            {toggle === true ? 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelToggle}/> : <button onClick={formVisiblity}>Add New Expense</button> } 
        </div>
    );
}

export default NewExpense;