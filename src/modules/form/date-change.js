
import { schedulesDay } from "../schedules/load.js"


//selects the date input
const selectedDate = document.getElementById('date');


//reloads the hours when the input change

selectedDate.onchange = () => schedulesDay()