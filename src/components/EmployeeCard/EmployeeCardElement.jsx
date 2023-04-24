import './EmployeeCardElement.css';

export const EmployeeCardElement = ({ label, value, onEditClick }) => {
    return <div className="info-item-wrapper">
        <div className="info-item">
            <div className="label">{label}</div>
            <div className="value">{value}</div>
        </div>
        <div className="action"><button onClick={onEditClick}>Edit</button></div>
    </div>
}