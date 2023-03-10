import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css' 
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const selectedYearData = (year) => {
        setSelectedYear(year)
        // console.log('Expenses.js');
        // console.log(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    let expensesContent = <p>No expenses found.</p>

    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                ));
    }

   
return ( 
    <div>
       
<Card className='expenses'>
<ExpensesFilter selected={selectedYear} yearData={selectedYearData}  />
{expensesContent}
{/* {props.items.map((expense) => ( */}
{/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p> ) : ( filteredExpenses.map((expense) => (
<ExpenseItem 
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    />
    ))
    )} */}
{/* <ExpenseItem 
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
    />
    <ExpenseItem
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
    />
    <ExpenseItem
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}
    />
    <ExpenseItem
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
    /> */}
</Card>
</div>
);
}

export default Expenses;