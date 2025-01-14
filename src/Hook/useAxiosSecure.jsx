import axios from 'axios'
export const axiosSecure = axios.create({
    baseURL: 'https://api.example.com',
    withCredentials:true,
})
const useAxiosSecure = () => {
    
};

export default useAxiosSecure;