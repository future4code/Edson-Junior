
import { useHistory } from "react-router-dom"
import { HeaderContainer, HeaderLogin, HeaderLogo } from "./stylesHeader"



const Header = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }
    

    return (
        <HeaderContainer>
            <HeaderLogo>
                LabeX
            </HeaderLogo>
            <HeaderLogin onClick={goToLoginPage}>
                Login
            </HeaderLogin>
        </HeaderContainer>
    )
}

export default Header