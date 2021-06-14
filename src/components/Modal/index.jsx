import { ModalDiv, CloseDiv, BackgroundModal } from "./style";

const Modal = ({children, isOpened, setIsOpened}) => {

    return (
        <BackgroundModal>
        <ModalDiv isOpened={isOpened}>
            <CloseDiv onClick={() => setIsOpened(false)}> <p>X</p> </CloseDiv>
            {children}
        </ModalDiv>
        </BackgroundModal>
    )
}

export default Modal;