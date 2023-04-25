import { useState, useCallback, useRef } from 'react';
import { useModal } from '../../hooks/use-modal/useModal';
import './EmployeeCardElement.css';

export const EmployeeCardElement = ({ label, value, onSave }) => {
    const ctxModal = useModal();
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef();

    const onSubmit = useCallback(() => {
        setIsEdit(false);
        onSave(inputRef.current.value);
    }, [setIsEdit, inputRef]);
    const onCancel = useCallback(() => { setIsEdit(false) }, [setIsEdit]);
    const onEdit = useCallback(() => { setIsEdit(true) }, [setIsEdit]);

    return <div className="info-item-wrapper">
        <div className="info-item">
            <div className="label">{label}</div>
            <div className="value">{isEdit ? <input defaultValue={value} ref={inputRef} /> : value}</div>
        </div>
        <div className="action">
            {!isEdit && <button onClick={ctxModal.openModal}>Edit</button>}
            {isEdit && <>
                <button onClick={onSubmit}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </>}
        </div>
    </div>
}