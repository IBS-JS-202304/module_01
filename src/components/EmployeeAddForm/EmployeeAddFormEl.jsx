import { forwardRef } from 'react';
import './EmployeeAddFormEl.css';

export const EmployeeAddFormEl = forwardRef(({ label }, ref) => {
    return <div className="form-row">
        <div className="field-label">{label}</div>
        <div className="field-input-wrapper"><input className="field-input-el" ref={ref} /></div>
    </div>
})