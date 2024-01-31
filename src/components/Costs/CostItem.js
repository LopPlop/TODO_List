import './CostItem.css'
import CostDate from './CostDate'
import Card from '../UI/Card';

const CostItem = (props) => {
    return <Card className='cost-item'>
                <CostDate date={props.date}/>
                <div className='cost-item__description'>
                    <h2>{props.item}</h2>
                    <div className='cost-item__price'>{props.price}руб.</div>
                </div>
           </Card>
}

export default CostItem;



