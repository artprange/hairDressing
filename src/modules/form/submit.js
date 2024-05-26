import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//current date
const today= dayjs(new Date()).format("YYYY-MM-DD");

//loading current date
selectedDate.value = today;

//setting the min date as the current date
selectedDate.min = today;

form.onsubmit = (event) =>{
    event.preventDefault()
}