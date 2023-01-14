 import ExpenseDate from './ExpenseDate';
 import Card from '../UI/Card'
 import './ExpenseItem.css';
 
 const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    let title = props.title;
   const clickHandler = () => {
    console.log('Clicked!!!!');
   }

    return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        {/* <div>{props.date.toISOString()}</div> */}
      
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}></button>
    </Card>
    );
 }

 export default ExpenseItem;