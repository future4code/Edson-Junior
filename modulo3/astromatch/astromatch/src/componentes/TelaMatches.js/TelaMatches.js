import { MatchesContainer } from "./estiloTelaMatches"


const TelaMatches = (props) => {

    
    

    return (
        <MatchesContainer>            
            <img src={props.matchPhoto} alt={'User photo'}/>{props.matchName}
        </MatchesContainer>
    )
}

export default TelaMatches