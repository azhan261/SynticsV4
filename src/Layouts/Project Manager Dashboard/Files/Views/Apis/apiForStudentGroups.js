import axios from 'axios';

export const getStudentGroups = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/student-groups-projects`)
		.then(res => res.data, )
		
)
//getting API for inserting the data
export const createStudentGroups= (todo) => fetch("https://www.syntics.co/student-groups-projects/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for updating specific data
export const updateStudentGroup = (todo, id) => fetch(`https://www.syntics.co/student-groups-projects/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

//getting API for getting specific data
export const getStudentGroup = (id) => fetch(`https://www.syntics.co/student-groups-projects/${id}`).then(res => res.json())

export const getRegisterationStudents = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/student-groups-projects/specific/${id}`)
		.then(res => res.data, )
		
)

export const getRegisterationStudentsById = id => (
	console.log(id),
	axios.post(`https://www.syntics.co/student-groups-projects/specific/id/${id}`)
		.then(res => res.data, )
)