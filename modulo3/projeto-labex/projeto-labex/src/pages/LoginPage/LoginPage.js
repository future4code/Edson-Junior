import { useHistory } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { LoginButton, LoginButtonContainer, LoginContainer, LoginInput, LoginInputContainer } from "./stylesLoginPage"
import useForm from "../../hooks/useForm"
import { useEffect } from "react/cjs/react.development"

const LoginPage = () => {
    const history = useHistory()
    const aluno = "edson-magnini-carver"
    const { form, onChange } = useForm({
        email: "",
        password:""
    })
    const goBack = () => {
        history.goBack()
    }

    const loginRequest = (event) => {
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/login`
        event.preventDefault();

        axios.post(url, form)
            .then((res) => {
                alert(`Login realizado com sucesso! Seja bem-vindo(a) ${res.data.user.email}`)
                localStorage.setItem("token", res.data.token)
                history.push("/")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token !== null) {
            
        }
        history.push("/admin/trips/list")  
    },[])

    return (
        <LoginContainer>
            <LoginInputContainer>
                <form onSubmit={loginRequest}>
                <LoginInput
                    placeholder="E-mail"
                    name={"email"}
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <LoginInput
                    placeholder="Senha"
                    name={"password"}
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <LoginButtonContainer>
                <LoginButton>
                    Enviar
                </LoginButton>
                <LoginButton onClick={goBack}>
                    Voltar
                </LoginButton>
            </LoginButtonContainer>
                </form>
                
            </LoginInputContainer>
            


        </LoginContainer>
    )
}

export default LoginPage