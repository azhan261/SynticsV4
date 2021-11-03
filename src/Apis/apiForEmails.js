//getting API for showing all the data
import axios from 'axios';
//export const getEmails = () => fetch("https://www.syntics.co/emails").then(res => res.json())
export const getEmails = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/emails`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createEmails = (todo) => fetch("https://www.syntics.co/contacts/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateTodoForTeacher = (todo, id) => fetch(`https://www.syntics.co/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getEmail = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/${id}`)
		.then(res => res.data, )
)
//export const getEmail = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())