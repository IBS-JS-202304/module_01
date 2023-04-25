import './Modal.css';

export const Modal = ({ isOpen, content, onCancel, onConfirm }) => {
    return isOpen ? (
        <div className="overlay">
            <div className='cancel' onClick={onCancel}></div>
            <div className="modal">{content}</div>
        </div>
    ) : <></>;
}