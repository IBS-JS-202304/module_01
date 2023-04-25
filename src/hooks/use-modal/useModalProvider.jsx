import { useState , useCallback} from "react";
import { createContext } from "react";
import { Modal } from '../../components/common/Modal';

export const ModalContext = createContext({});

export const UseModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const closeModal = useCallback(() => {
        console.log('on modal cancel');
        setIsOpen(false);
    }, [setIsOpen]);

    const value = {
        closeModal,
        openModal,
    }
    return (<ModalContext.Provider value={value}>
        <Modal isOpen={isOpen} content={"test content for dialog"} onCancel={closeModal} onConfirm={() => { console.log('on modal cancel') }} />
        {children}
    </ModalContext.Provider>)
}