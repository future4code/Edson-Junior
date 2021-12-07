import { useHistory } from "react-router-dom"
import { TripsButton, TripsButtonContainer, TripsContainer } from "./stylesListTripsPage"

const ListTripsPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    return (
        <TripsContainer>
            <TripsButtonContainer>
                <TripsButton onClick={goBack}>
                    Voltar
                </TripsButton>
                <TripsButton onClick={goToApplicationForm}>
                    Aplicar
                </TripsButton>
            </TripsButtonContainer>
        </TripsContainer>
    )
}

export default ListTripsPage