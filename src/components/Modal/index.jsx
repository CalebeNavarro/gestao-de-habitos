import { ModalDiv, CloseDiv } from "./style";

const Modal = ({children, isOpened, setIsOpened}) => {

    return (
        <ModalDiv isOpened={isOpened}>
            <CloseDiv onClick={() => setIsOpened(false)}> X </CloseDiv>
            {children}
        </ModalDiv>
    )
}

export default Modal;