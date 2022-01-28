import { ButtonHome, HomeContainer } from "./stylesHomePage"

import { useHistory } from "react-router-dom"

const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripPage = () => {
        history.push("/trips/list")
    }

    return (
        <HomeContainer>

            <ButtonHome onClick={goToTripPage}>
                Ver viagens
            </ButtonHome>
            <ButtonHome onClick={goToLoginPage}>
                Área de admin
            </ButtonHome>

        </HomeContainer>
    )
}

export default HomePage