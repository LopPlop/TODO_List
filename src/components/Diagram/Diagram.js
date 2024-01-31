import './Diagram.css'
import DiagramBar from './DiagramBar';

const Diagram = (props) => {
    return (
        <div className="diagram">
            {props.dataSet.map((item) => {
                <DiagramBar 
                key={dataSet.id}
                value={dataSet.value}
                maxValue={null}
                label={dataSet.label}
                />
            })}
            
        </div>
    )
}
export default Diagram;