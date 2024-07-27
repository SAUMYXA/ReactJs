import Expenses from "./components/Expenses/Expenses";
function App() {
  let expenses = [
    { id: "e1", title: "School fees", amount: 500, date: new Date(2024, 5, 5) },
    {
      id: "e2",
      title: "Electricity Bill",
      amount: 300,
      date: new Date(2024, 5, 5),
    },
    { id: "e3", title: "Travel Exp", amount: 100, date: new Date(2024, 5, 5) },
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses item={expenses} />
    </div>
  );
}
export default App;
