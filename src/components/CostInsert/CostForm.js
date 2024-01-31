import { useState } from 'react';
import './CostForm.css'



const CostForm = (props) => {



const [inputPrice, SetInputPrice] = useState('');
const onInputPriceChangeHandler = (event) =>{
    SetInputPrice(event.target.value);
}

const [inputItem, SetInputItem] = useState('');
const onInputItemChangeHandler = (event) =>{
    SetInputItem(event.target.value);
}

const [inputDate, SetInputDate] = useState(new Date(''));
const onInputDateChangeHandler = (event) =>{
    const selectedDate = new Date(event.target.value);
    const formattedDate = selectedDate.toISOString().split('T')[0]; // Преобразовать в формат "yyyy-MM-dd"
    SetInputDate(formattedDate);
}

const onSubmitHandler = (event) =>{
    event.preventDefault();

    const costData = {
        data: new Date(inputDate),
        item: inputItem,
        price: inputPrice
    }


    props.onSaveCostData(costData);
    SetInputPrice('');
    SetInputItem('');
    SetInputDate(new Date(''));
    props.onInserting(false)
}


    return <form onSubmit={onSubmitHandler}>
                <div className="insert-cost__controls flex">
                    <div className="insert-cost__control">
                        <label>Название</label>
                        <input type="text" value={inputItem} onChange={onInputItemChangeHandler}/>
                    </div>
                    <div className="insert-cost__control">
                        <label>Сумма</label>
                        <input type="number" min="0.01" step="0.01" value={inputPrice} onChange={onInputPriceChangeHandler}/>
                    </div>
                    <div className="insert-cost__control">
                        <label>Дата</label>
                        <input type="date" min="2019-01-01" step="2022-01-21" value={inputDate} onChange={onInputDateChangeHandler}/>
                    </div>
                </div>
                <button className='insert-cost__actions' type="submit">Добавить расход</button>
                <button className='insert-cost__actions' onClick={() => props.onInserting(false)}>Отмена</button>
            </form>
}

export default CostForm;