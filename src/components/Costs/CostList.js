import Card from "../UI/Card";
import CostsFilter from "./CostFilter";
import CostItem from "./CostItem"
import './CostList.css'
import React, { useState } from "react";

const CostList = (props) =>{

    const [selectedYear, setSelectedYear] = useState('2024');


const onChangeYearHandler = (year) => {
    setSelectedYear(year);
}

    return(
        <Card className='cost-list'>
            <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/>
            {props.list.map((cost) => (
                <CostItem 
                    date={cost.data} 
                    item={cost.item} 
                    price={cost.price} 
                />
            ))}
        </Card>
    );
}

export default CostList;