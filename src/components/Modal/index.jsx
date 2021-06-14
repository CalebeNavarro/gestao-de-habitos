import { ModalDiv, CloseDiv, FormContener } from "./style";

const Modal = ({children, isOpened, setIsOpened}) => {

    return (
        <ModalDiv isOpened={isOpened}>
            <CloseDiv onClick={() => setIsOpened(false)}> <p>X</p> </CloseDiv>
            <FormContener>
            {children}
            </FormContener>
        </ModalDiv>
    )
}

export default Modal;