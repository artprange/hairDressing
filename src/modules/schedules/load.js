import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

//gets the date input
const selectedDate = document.getElementById("date");

export async function schedulesDay(){

    const date = selectedDate.value;    
    


    //searches all the hours in the api
    const dailySchedules = await scheduleFetchByDay({date});

    //renders the available hours
    hoursLoad({date});

}