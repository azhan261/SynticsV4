//getting API for showing all the data
import axios from 'axios';
//https://www.syntics.co/api/files
//export const getAnswers = () => fetch("https://www.syntics.co/answers").then(res => res.json())
export const getFiles = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/api/findAll/files`)
		.then(res => res.data, )
)


//getting API for inserting the data
export const createFile = (todo) => fetch("https://www.syntics.co/api/files", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
//export const getAnswer = (id) => fetch(`https://www.syntics.co/${id}`).then(res => res.json())
export const getFileSpecific = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/api/findOne/files/${id}`)
		.then(res => res.data, )
)

export const getAnswerSpecific = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/answers/specific/${id}`)
		.then(res => res.data, )
)


export const getAnswerSpecificWithSubject = (id, subject) => (
	console.log(id, subject),
	axios.post(`https://www.syntics.co/answers/specific/subject/${id}&${subject}`)
		.then(res => res.data, )
)
export const getAnswerById = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/answers/specific/id/${id}`)
		.then(res => res.data, )
)