import ExpenseItem from "./components/ExpenseItem";
function App(){

    let expenses=[
      {  id:'e1',
        title:'School fees',
        amount:500,
        date:new Date(2024,5,5)
        },
        {  id:'e2',
        title:'Electricity Bill',
        amount:300,
        date:new Date(2024,5,5)
        },
        {  id:'e3',
        title:'Travel Exp',
        amount:100,
        date:new Date(2024,5,5)
        },
    ]
    return (
        <div>
            <h2>Lets get started!</h2>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount}></ExpenseItem>
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount}></ExpenseItem>
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount}></ExpenseItem>
        </div>
        
    )
}
export default App;