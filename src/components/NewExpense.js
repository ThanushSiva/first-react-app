import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;