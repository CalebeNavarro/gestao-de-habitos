import { ModalDiv, CloseDiv, FormContener, BackgroundModal  } from "./style";

const Modal = ({children, isOpened, setIsOpened}) => {

    return (
        <BackgroundModal>
        <ModalDiv isOpened={isOpened}>
            <CloseDiv onClick={() => setIsOpened(false)}> <p>X</p> </CloseDiv>
            <FormContener>
            {children}
            </FormContener>
        </ModalDiv>
        </BackgroundModal>
    )
}

export default Modal;