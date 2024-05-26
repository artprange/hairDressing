
import dayjs from "dayjs";

import { openingHours } from "../../utils/opening-hours.js";
import { schedulesDay } from '../schedules/load';

export function hoursLoad({date}){
    const opening = openingHours.map((hour)=>{

        const [scheduleHour] = hour.split(":")

        //adding the hour to the date and validating 

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

        return{
            hour,
            available: isHourPast,
        }

    })

}