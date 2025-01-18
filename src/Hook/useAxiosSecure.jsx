import axios from 'axios'
export const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_LOCALHOST,
    // withCredentials:true,
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;