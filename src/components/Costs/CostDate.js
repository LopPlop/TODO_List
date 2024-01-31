import './CostDate.css'

const CostDate = ({date}) => {

    if(date === undefined){
        return;
    }

    const year = date.getFullYear();
    const month = date.toLocaleString("ru-RU", { month: "long"});
    const day = date.toLocaleString("ru-RU", { day: "2-digit"});

    return(
        <div className="cost-date">
            <div className='cost-date__month'>{month}</div>      
            <div className='cost-date__year'>{year}</div>
            <div className='cost-date__day'>{day}</div>              
        </div>        
    )
}

export default CostDate;