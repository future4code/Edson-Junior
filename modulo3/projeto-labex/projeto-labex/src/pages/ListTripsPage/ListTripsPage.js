import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage"

import { TripListCard, TripsButton, TripsButtonContainer, TripsContainer } from "./stylesListTripsPage"

const ListTripsPage = () => {
    const history = useHistory()
    const aluno = "edson-magnini-carver"
    const [tripList, setTripList] = useState({})
    const goBack = () => {
        history.goBack()
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }
    const getTrips = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
        axios.get(url,
            {
            headers: {
                auth: localStorage.getItem("token")
            }
            })
            .then((res) => {
                setTripList(res.data)
            })
            .catch((err) => {
                alert("Ocorreu um erro inesperado")
        })
    }
    useEffect(() => {
        getTrips()
    },[])
    const tripListMaped = tripList.trips && tripList.trips.map((trip) => {
        return (
            <TripListCard key={trip.id}>
                <p>Nome: {trip.name}</p>
                <p>Descrição: {trip.description}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Duração (dias): {trip.durationInDays}</p>
                <p>Data: {trip.date}</p>
            </TripListCard>
            
        )
    })
    
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
            {tripListMaped}
        </TripsContainer>
       
    )
}

export default ListTripsPage