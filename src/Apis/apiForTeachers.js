import axios from 'axios';

//export const getTodosForTeacher = () => fetch("https://www.syntics.co/").then(res => res.json())
export const getTodosForTeacher = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/`)
		.then(res => res.data, )
)
//getting API for inserting the data
export const createTodoForTeachers = (todo) => fetch("https://www.syntics.co/teachers/create", {

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
//export const getTeacher = (id) => fetch(`https://www.syntics.co/teachers/specific/${id}`).then(res => res.json())
export const getTeacher = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/teachers/specific/${id}`)
		.then(res => res.data, )
)