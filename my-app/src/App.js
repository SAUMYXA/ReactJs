import ExpenseItem from "./components/ExpenseItem";
function App(){
    let expenseDate=new Date(2024,7,25)
    let expenseTitle='SchoolFee'
    let  expenseAmt=300;
    return (
        <div>
            <h2>Lets get started!</h2>
            <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmt}></ExpenseItem>
        </div>
        
    )
}
export default App;