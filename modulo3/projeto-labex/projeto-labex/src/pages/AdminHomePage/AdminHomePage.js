import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AdminHomeButton, AdminHomeButtonContainer, AdminHomeCardButton, AdminHomeCardContainer, AdminHomeCardContent, AdminHomeContainer, AdminHomeTripCard } from "./stylesAdminHomePage"

const AdminHomePage = () => {
    const history = useHistory()
    const aluno = "edson-magnini-carver"
    
    const logout = () => {
        alert("Logout realizado.")
        localStorage.removeItem("token")
    }

    const [tripList, setTripList] = useState({})

    const goToTripDetailsPage = (tripId) => {
        history.push(`/admin/trips/${tripId}`)
    }


    

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const tripListMap = tripList.trips && tripList.trips.map((trip) => {
        return (
            <AdminHomeCardContainer>
            <AdminHomeCardContent key={trip.id} onClick={() => goToTripDetailsPage(trip.id)}>
            {trip.name}
            
            </AdminHomeCardContent>
            <AdminHomeCardButton onClick={()=> deleteTrip(trip.id)}>
            lixeira
            </AdminHomeCardButton>
            </AdminHomeCardContainer>
        )
        

    })

    

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

     const deleteTrip = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${id}`, {
            headers: { auth: localStorage.getItem("token") }
        })
        .then(() => {
            alert("Viagem deletada.")
            getTrips()
        })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            alert("Você não está logado. Por favor, faça seu login.")
        }
        getTrips()
    }, [])


    return (
        <AdminHomeContainer>

            <AdminHomeButtonContainer>

                <AdminHomeButton>
                    Voltar
                </AdminHomeButton>

                <AdminHomeButton onClick={goToCreateTripPage}>
                    Criar viagem
                </AdminHomeButton>

                <AdminHomeButton onClick={logout}>
                    Logout
                </AdminHomeButton>

            </AdminHomeButtonContainer>

            <AdminHomeCardContainer>

                <AdminHomeCardContent>
                    {tripListMap && tripListMap.length > 0 ? tripListMap : <p>Caregando...</p>}


                </AdminHomeCardContent>


                

            </AdminHomeCardContainer>

        </AdminHomeContainer>
    )
}

export default AdminHomePage