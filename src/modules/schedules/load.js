import { hoursLoad } from "../form/hours-load.js";
import { showSchedule } from "../schedules/show.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

//gets the date input
const selectedDate = document.getElementById("date");

export async function schedulesDay(){

    const date = selectedDate.value;    
    


    //searches all the hours in the api
    const dailySchedules = await scheduleFetchByDay({date});

    //renders the schedueled hours
    showSchedule({dailySchedules})
    //renders the available hours
    hoursLoad({date});

}