import { hoursLoad } from "../form/hours-load.js";

//gets the date input
const selectedDate = document.getElementById("date");

export function schedulesDay(){

    const date = selectedDate.value;    
    
    hoursLoad({date});

}