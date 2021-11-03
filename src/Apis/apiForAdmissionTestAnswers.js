//getting API for showing all the data
import axios from 'axios';

//export const getAnswers = () => fetch("https://www.syntics.co/answers").then(res => res.json())

export const getAnswers = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/answers`)
		.then(res => res.data, )
)



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
//export const getAnswer = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())
export const getAnswer = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/${id}`)
		.then(res => res.data, )
)
