
import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { HeaderContainer, HeaderLogin, HeaderLogo } from "./stylesHeader"



const Header = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }
    
    useEffect(() => {
        
        
    },[])

    return (
        <HeaderContainer>
            <HeaderLogo>
                LabeX
            </HeaderLogo>
            {/* {token === null? <HeaderLogin onClick={goToLoginPage}>
                Login
            </HeaderLogin> : <p>{userEmail} </p> } */}
            <HeaderLogin onClick={goToLoginPage}>
                Login
            </HeaderLogin>
        </HeaderContainer>
    )
}

export default Header