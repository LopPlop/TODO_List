import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import CostItem from "./CostItem"
import './CostList.css'
import React, { useState } from "react";

const CostList = ({list}) =>{

    const [selectedYear, setSelectedYear] = useState('2024');
    const onChangeYearHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredList = list.filter((cost) => cost.data.getFullYear().toString() === selectedYear)
    let content = (<p>В этом году нет расходов</p>)
    if(filteredList.length > 0)
    {
        content = filteredList.map((cost) => (
            <CostItem 
                key={cost.id}
                date={cost.data} 
                item={cost.item} 
                price={cost.price} 
            />))
    }

    return(
        <Card className='cost-list'>
            <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/>
            {content}
        </Card>
    );
}

export default CostList;