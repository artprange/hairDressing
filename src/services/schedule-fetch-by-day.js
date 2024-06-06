import dayjs from 'dayjs';
import { apiConfig } from "./api-config";

export async function scheduleFetchByDay({date}){
    try{
        //calling the request.
      const response = await fetch(`${apiConfig.baseURL}/schedules`)

      const data = await response.json();

      //filtering the hours by selected day
      const dailySchedules = data.filter((schedule)=>
         dayjs(date).isSame(schedule.completeBooking, "day")
    )

    return dailySchedules
    } catch (error){
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}