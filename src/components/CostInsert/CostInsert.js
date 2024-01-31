import CostForm from './CostForm';
import './CostInsert.css'
import { useState } from 'react';
import './CostForm.css'

const CostInsert = (props) =>{

    const [isInserting, setIsInserting] = useState(false);

    const OnInsertinfHandler = (_isInserting) => {
        setIsInserting(_isInserting);
    }

const onSaveCostDataHandler = (inputCostData) => {
    const costData = {
        ...inputCostData,
        id: Math.random().toString()
    };
    props.onSaveCostData(costData)
}
    let content = <CostForm onInserting={OnInsertinfHandler} onSaveCostData={onSaveCostDataHandler}/>

    if(!isInserting)
    {
        content = <button className='insert-cost__actions' onClick={() => OnInsertinfHandler(true)}>Добавить новый расход</button>
    }

    return(
        <div className="insert-cost">
            {content}
        </div>
    );
}

export default CostInsert;