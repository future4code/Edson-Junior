import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { AdminHomeTripCard } from "../AdminHomePage/stylesAdminHomePage"
import { CreateTripButton, CreateTripButtonContainer, CreateTripContainer, CreateTripForm, CreateTripInput, CreateTripSelect } from "./stylesCreateTripPage"

const CreateTripPage = () => {
    const history = useHistory()
    const aluno = "edson-magnini-carver"
    const { form, onChange, clear } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })
    

    const createTrip = (event) => {
        event.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`
        axios.post(url, form, {
            headers:
            {
                auth: localStorage.getItem("token")
            }
        })
            .then((res) => {
                alert("Viagem criada!")
                clear()
                console.log(res)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }


    

    

    const today = new Date()
    const stringToday = today.getFullYear() + "-" +
        ("0" + (today.getMonth() + 1)).substr(-2) + "-"
        + ("0" + today.getDate()).substr(-2)

    const goBack = () => {

    }

    return (
        <CreateTripContainer>
            <CreateTripForm onSubmit={createTrip}>
                <CreateTripInput
                    placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <CreateTripSelect
                    placeholder={"Planeta"}
                    name={"planet"}
                    defaultValue={""}
                    onChange={onChange}
                    required
                >
                    <option value={""}>
                        Escolha um planeta
                    </option>
                    <option value={"Jupiter"}>
                        Jupiter
                    </option>
                    <option value={"Marte"}>
                        Marte
                    </option>
                    <option value={"Mercúrio"}>
                        Mercúrio
                    </option>
                    <option value={"Netuno"}>
                        Netuno
                    </option>
                    <option value={"Plutão"}>
                        Plutão
                    </option>
                    <option value={"Saturno"}>
                        Saturno
                    </option>
                    <option value={"Terra"}>
                        Terra
                    </option>
                    <option value={"Urano"}>
                        Urano
                    </option>
                    <option value={"Vênus"}>
                        Vênus
                    </option>
                </CreateTripSelect>
                <CreateTripInput
                    placeholder={"Data"}
                    type={"date"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    min={stringToday}
                />
                <CreateTripInput
                    placeholder="Descrição"
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <CreateTripInput
                    placeholder={"Duração em dias"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />
                <CreateTripButtonContainer>
                    <CreateTripButton onClick={goBack}>
                        Voltar
                    </CreateTripButton>
                    <CreateTripButton>
                        Criar
                    </CreateTripButton>
                </CreateTripButtonContainer>

            </CreateTripForm>
        </CreateTripContainer>
    )
}

export default CreateTripPage