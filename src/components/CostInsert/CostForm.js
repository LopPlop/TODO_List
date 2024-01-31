import { useState } from 'react';
import './CostForm.css'



const CostForm = (props) => {



const [inputName, SetInputName] = useState('');
const onInputNameChangeHandler = (event) =>{
    SetInputName(event.target.value);
}

const [inputItem, SetInputItem] = useState('');
const onInputItemChangeHandler = (event) =>{
    SetInputItem(event.target.value);
}

const [inputDate, SetInputDate] = useState('');
const onInputDateChangeHandler = (event) =>{
    SetInputDate(event.target.value);
}

const onSubmitHandler = (event) =>{
    event.preventDefault();

    const costData = {
        name: inputName,
        item: inputItem,
        date: inputDate
    }


    props.onSaveCostData(costData);
    SetInputName('');
    SetInputItem('');
    SetInputDate('');
}


    return <form onSubmit={onSubmitHandler}>
                <div className="insert-cost__controls flex">
                    <div className="insert-cost__control">
                        <label>Название</label>
                        <input type="text" value={inputName} onChange={onInputNameChangeHandler}/>
                    </div>
                    <div className="insert-cost__control">
                        <label>Сумма</label>
                        <input type="number" min="0.01" step="0.01" value={inputItem} onChange={onInputItemChangeHandler}/>
                    </div>
                    <div className="insert-cost__control">
                        <label>Дата</label>
                        <input type="date" min="2019-01-01" step="2022-01-01" value={inputDate} onChange={onInputDateChangeHandler}/>
                    </div>
                </div>
                <button className='insert-cost__actions' type="submit">Добавить расход</button>
            </form>
}

export default CostForm;