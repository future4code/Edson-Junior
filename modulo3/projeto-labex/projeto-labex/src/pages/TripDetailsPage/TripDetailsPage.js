import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TripDetailsButton, TripDetailsCandidatesCard, TripDetailsCard, TripDetailsContainer } from "./stylesTripDetailsPage"

const TripDetailsPage = () => {
    const aluno = "edson-magnini-carver"
    const params = useParams()
    const [tripDetails, setTripDetails] = useState({})
    const getTripDetails = () => {

        const token = localStorage.getItem("token")

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/${params.id}`

        axios.get(url,
            {
                headers: {
                    auth: token
                }
            }
        )
            .then((res) => {
                setTripDetails(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getTripDetails()
    }, [params.id])

    const tripDetailsCandidate = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((trip) => {
        return <TripDetailsCandidatesCard key={trip.id}>
            <p><b>Nome:</b> {trip.name}</p>
            <p><b>Profissão:</b> {trip.profession}</p>
            <p><b>Idade:</b> {trip.age}</p>
            <p><b>País:</b> {trip.country}</p>
            <p><b>Texto de Candidatura:</b> {trip.applicationText}</p>
            <TripDetailsButton onClick={() => approveCandidate(trip.id, false)}>
                Recusar
            </TripDetailsButton>
            <TripDetailsButton onClick={() => approveCandidate(trip.id, true)
            }>
                Aprovar
            </TripDetailsButton>
        </TripDetailsCandidatesCard>
    })
    console.log(tripDetailsCandidate)
    const approveCandidate = (candidateID, decision) => {
        const body = {
            approve: decision
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${params.id}/candidates/${candidateID}/decide`, body, {
            headers: { auth: localStorage.getItem("token") }
        })
            .then(() => {
                alert("Decisão realizada!")
                getTripDetails()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    const tripDetailsCandidateApproved = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((trip) => {
        return <li key={trip.id}>{trip.name}</li>
    })

    return (
        <TripDetailsContainer>
            {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
            {tripDetails && tripDetails.trip && <TripDetailsCard>
                <p><b>Nome:</b> {tripDetails.trip.name}</p>
                <p><b>Descrição:</b> {tripDetails.trip.description}</p>
                <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
                <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
                <p><b>Data:</b> {tripDetails.trip.date}</p>
            </TripDetailsCard>}

            <TripDetailsButton>
                Voltar
            </TripDetailsButton>

            {tripDetailsCandidate && tripDetailsCandidate.length > 0 ? tripDetailsCandidate : <p>Não há candidatos pendentes</p>}

            {tripDetailsCandidateApproved && tripDetailsCandidateApproved.length > 0 ? tripDetailsCandidateApproved : <p>Não há candidatos aprovados</p>}
        </TripDetailsContainer>
    )
}

export default TripDetailsPage