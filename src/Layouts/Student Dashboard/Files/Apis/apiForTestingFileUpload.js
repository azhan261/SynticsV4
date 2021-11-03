//getting API for showing all the data
import axios from 'axios';
export const getFiles = () => fetch("https://www.syntics.co/api").then(res => res.json())


//getting API for inserting the data
export const createAnswers = (todo) => fetch("https://www.syntics.co/answers/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getAnswer = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())