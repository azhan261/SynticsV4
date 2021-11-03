//getting API for showing all the data
import axios from 'axios';
export const getCourseContents = () => fetch("https://www.syntics.co/coursePlannings").then(res => res.json())

//getting API for inserting the data
export const createCourseContents = (todo) => fetch("https://www.syntics.co/coursePlannings/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateCourseContents = (todo, id) => fetch(`https://www.syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getCourseContent = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())