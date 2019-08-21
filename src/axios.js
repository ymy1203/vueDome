import axios from 'axios';

let path = 'http://127.0.0.1:8081/api/'
export const ajax = async (type,url,data) => {
	axios.defaults.headers.post['Content-Type'] = 'application/json';
	if(type == 'GET') {
		let result = await axios.get(`${path+url}`,{
			params:data
		})
		return result
	} else if(type == 'POST') {
		let result = await axios.post(`${path+url}`,{
			params:data
		})
		return result;
	}
}


export const postData = (params)=> ajax("POST","v2/decorate/shelves",params);