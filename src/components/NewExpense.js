import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

function NewExpense(props) {
    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseDate
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