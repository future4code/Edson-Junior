import { MatchesContainer, MatchPhoto } from "./estiloTelaMatches"


const TelaMatches = (props) => {

    
    

    return (
        <MatchesContainer>            
            <MatchPhoto src={props.matchPhoto} alt={'User photo'}/>{props.matchName}
        </MatchesContainer>
    )
}

export default TelaMatches