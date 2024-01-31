import CostList from "./components/Costs/CostList";
import CostInsert from "./components/CostInsert/CostInsert";
import { useState } from "react";

const INITIAL_COSTS = [
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

const [list, setList] = useState(INITIAL_COSTS);


const onSaveCostDataHandler = (costData) => {
  setList((prevCost) => {
    return[costData, ...prevCost]
  })
}

  return (
    <div className="App">
      <CostInsert onSaveCostData={onSaveCostDataHandler}/>
      <CostList list = {list}/>
    </div>
  );
}

export default App;
