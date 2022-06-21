import './ExpenseForm.css'

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = ueState('');
    const [enteredAmount, setEnteredAmount] = ueState('');
    const [enteredDate, setEnteredDate] = ueState('');

    // const [userInput, setUserInput] = userState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        
        // *** using objects for multiple state ***
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        
        // *** Good approach to multiple state ***
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // })
    };
    const amountChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;