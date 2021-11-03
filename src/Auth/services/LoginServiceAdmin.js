import axios from 'axios';

const LoginService = data => (
	console.log(data),
	axios.post('https://www.syntics.co/students/login', data)
		.then(res => res.status, )
		
)

export default LoginService;
