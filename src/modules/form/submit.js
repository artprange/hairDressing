import dayjs from "dayjs";
import {scheduleNew} from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//current date
const today= dayjs(new Date()).format("YYYY-MM-DD");

//loading current date
selectedDate.value = today;

//setting the min date as the current date
selectedDate.min = today;

form.onsubmit = async (event) =>{
    event.preventDefault()

    try{
        //retrieving the client's name
        const name = clientName.value.trim();

    if(!name){
        return alert("Informe o nome do cliente")
    }

    //retriving the selected hour

    const hourSelected = document.querySelector(".hour-selected");

    if(!hourSelected){
        return alert ("Por favor, selecione a hora.")
    }

    //retriving the hour, only
    const [hour] = hourSelected.innerText.split(":")

    //adding the hour to the date
    const completeBooking = dayjs(selectedDate.value).add(hour, "hour")

    //generating an ID
    const id = new Date().getTime()

    //books the specific hour
    await scheduleNew({
        id,
        name,
        completeBooking,

    })

    //reloads all the bookings
    await schedulesDay();
    clientName.value='';
    } catch (error){
        alert("Não foi possível realizar seu agendamento :( ")
        console.log(error)
    }
}