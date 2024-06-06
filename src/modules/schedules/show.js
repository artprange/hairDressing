import dayjs from "dayjs";

//selects the sessions /morning /noon /night

const morningPeriod = document.getElementById('period-morning');
const afternoonPeriod = document.getElementById('period-afternoon');
const nightPeriod = document.getElementById('period-night');

export function showSchedule({ dailySchedules }){
    try{
        morningPeriod.innerHTML = '';
        afternoonPeriod.innerHTML= '';
        nightPeriod.innerHTML = '';

        //rendering the scheduled hours
        dailySchedules.forEach((schedule) => {
            const item = document.createElement('li')
            const time = document.createElement('strong')
            const name = document.createElement('span')

            //adds the schedueling id
            item.setAttribute('data-id', schedule.id)
            time.textContent = dayjs(schedule.completeBooking).format('HH:mm')
            name.textContent = schedule.name


            //creating the cancel icon
            const cancelIcon = document.createElement('img')
            cancelIcon.classList.add('cancel-icons')
            cancelIcon.setAttribute('src', './src/assets/cancel.svg')
            cancelIcon.setAttribute('alt', 'cancelar')

            //adding the time, name and icon to the item
            item.append(time, name, cancelIcon)

            //retives just the time
            const hour = dayjs(schedule.completeBooking).hour()

            //renders the schedueling to the session, conditionally 
            if(hour <= 12){
                morningPeriod.appendChild(item)
            } else if ( hour >12 && hour <=18){
                afternoonPeriod.appendChild(item)
            } else {
                nightPeriod.appendChild(item)
            }

        });

    } catch (error){
        alert("Não foi possível exibir os agendamentos :( tente novamente mais tarde.")
    }

}