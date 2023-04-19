import './EmployeeCardHeader.css'
export const EmployeeCardHeader = ({ onGoBack }) => {
    return (<div onClick={onGoBack} className="employee-card-header-wrapper">
        <div className="button-back">{`<`}</div>
        <div className="header-text">Employee</div>
    </div>);
}