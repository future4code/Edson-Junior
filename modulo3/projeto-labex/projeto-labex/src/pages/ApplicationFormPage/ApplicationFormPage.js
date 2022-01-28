import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { ApplicationButton, ApplicationButtonContainer, ApplicationContainer, ApplicationForm, ApplicationInput, ApplicationSelect } from "./stylesApplicationFormPage"

const ApplicationFormPage = () => {
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }
    const [tripId, setTripId] = useState("")
    const aluno = "edson-magnini-carver"
    const [tripList, setTripList] = useState({})

    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]

    const { form, onChange, clear } = useForm(
        {
            name: "",
            age: "",
            applicationText: "",
            profession: "",
            country: ""
        }
    )
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
    }, [])

    const onChangeTrip = (e) => {
        setTripId(e.target.value)
    }

    const tripListOptions = tripList.trips && tripList.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name}</option>
    })

    const applyTrip = (event) => {
        event.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips/${tripId}/apply`

        axios.post(url, form)
            .then((res) => {
                alert("Aplicação realizada!")
                clear()
            })
            .catch((err) => {
                alert(err.response.massage)
            })
    }
    return (
        <ApplicationContainer>

            <ApplicationForm onSubmit={applyTrip}>
                <ApplicationSelect
                    onChange={onChangeTrip}
                >
                    <option value={""}>
                        Escolha uma viagem
                    </option>
                    {tripListOptions}
                </ApplicationSelect>
                <ApplicationInput
                    placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <ApplicationInput
                    placeholder="Idade"
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                />
                <ApplicationInput
                    placeholder="Texto de candidatura"
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                />
                <ApplicationInput
                    placeholder="Profissão"
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                />
                <ApplicationSelect
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""}>
                        Escolha um país
                    </option>
                    {countries.map((country) => {
                        return <option value={country} key={country}>
                            {country}
                        </option>
                    })}
                </ApplicationSelect>
                <ApplicationButtonContainer>
                <ApplicationButton onClick={goBack}>
                    Voltar
                </ApplicationButton>
                <ApplicationButton>
                    Enviar
                </ApplicationButton>
            </ApplicationButtonContainer>
            </ApplicationForm>


            

        </ApplicationContainer>
    )
}

export default ApplicationFormPage