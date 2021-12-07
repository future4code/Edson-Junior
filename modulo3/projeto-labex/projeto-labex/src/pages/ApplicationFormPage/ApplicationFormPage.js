import { useHistory } from "react-router-dom"
import { ApplicationButton, ApplicationButtonContainer, ApplicationContainer } from "./stylesApplicationFormPage"

const ApplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <ApplicationContainer>
            <ApplicationButtonContainer>
            </ApplicationButtonContainer>
                <ApplicationButton onClick={goBack}>
                    Voltar
                </ApplicationButton>
                <ApplicationButton>
                    Enviar
                </ApplicationButton>
        </ApplicationContainer>
    )
}

export default ApplicationFormPage