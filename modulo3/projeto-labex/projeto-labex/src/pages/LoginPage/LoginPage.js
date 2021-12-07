import { useHistory } from "react-router-dom"
import { LoginButton, LoginButtonContainer, LoginContainer, LoginInput, LoginInputContainer } from "./stylesLoginPage"

const LoginPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <LoginContainer>
            <LoginInputContainer>
            <LoginInput
            placeholder="E-mail"
            />
            <LoginInput
            placeholder="Senha"
            />
            </LoginInputContainer>
            <LoginButtonContainer>
                <LoginButton>
                    Enviar
                </LoginButton>
                <LoginButton onClick={goBack}>
                    Voltar
                </LoginButton>
            </LoginButtonContainer>
            

        </LoginContainer>
    )
}

export default LoginPage