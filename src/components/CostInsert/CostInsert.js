import CostForm from './CostForm';
import './CostInsert.css'

const CostInsert = (props) =>{

const onSaveCostDataHandler = (inputCostData) => {
    const costData = {
        ...inputCostData,
        id: Math.random().toString()
    };
    props.onSaveCostData(costData)
}

    return(
        <div className="insert-cost">
            <CostForm onSaveCostData={onSaveCostDataHandler}/>
        </div>
    );
}

export default CostInsert;