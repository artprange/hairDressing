export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available)=>{
        available.addEventListener("click", (selected)=>{
            hours.forEach((hour)=>{
                hour.classList.remove("hour-selected")
            })

            //adding the class to the li
            selected.target.classList.add("hour-selected")
        })
    })
}