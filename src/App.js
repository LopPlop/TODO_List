import CostList from "./components/Costs/CostList";
import CostInsert from "./components/CostInsert/CostInsert";

let list = [
  {
    id:"c0",
    data: new Date(2023, 2 ,21),
    item: "Холодильник", 
    price:15000
  },
  {
    id:"c1",
    data: new Date(2023, 2 ,21),
    item: "Джинсы", 
    price:2000
  },
  {
    id:"c2",
    data: new Date(2023, 2 ,21),
    item: "Смартфон", 
    price:40000
  },
  {
    id:"c3",
    data: new Date(2023, 2 ,21),
    item: "KFC", 
    price:500
  }
]


function App() {

const onSaveCostDataHandler = (costData) => {
  console.log(costData)
}

  return (
    <div className="App">
      <CostInsert onSaveCostData={onSaveCostDataHandler}/>
      <CostList list = {list}/>
    </div>
  );
}

export default App;
