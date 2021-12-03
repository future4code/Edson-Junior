import { useState } from "react"
import { CardContainer, CardFooter, CardHeader, LikeButton, Logo, Perfil, Photo, UnlikeButton } from "./estiloTelaInicial"



const TelaInicial = (props) => {
    const [profileCard, setProfileCard] = useState([])



    return (
        <CardContainer>
            <Perfil>
                <div>
                    {props.profileName}, {props.profileAge}
                </div>
                <Photo src={props.profilePhoto} alt={'User photo'}/>
                <div>{props.profileDesc}</div>
            </Perfil>
            <CardFooter>
                <UnlikeButton onClick={props.onClickSkip}>X</UnlikeButton>
                <LikeButton onClick={props.onClickMatch}>♥️</LikeButton>
            </CardFooter>
        </CardContainer>
    )
}

export default TelaInicial