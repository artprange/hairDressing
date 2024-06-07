const periods = document.querySelectorAll('.period');


//creating a click event for each period of the day

periods.forEach((period)=>{

    //captures the click event on the list

    period.addEventListener("click" , (event) =>{
        if(event.target.classList.contains("cancel-icon")){
            //gets the li from the clicked parent element
            const item = event.targer.closest("li");
            const { id } = item.dataset;
           
            if(id){
                const isSure = confirm("Tem certeza que deseja cancelar seu agendamento?")
            }

            if(isSure){
                console.log("removido");
            }
        }
    })
})