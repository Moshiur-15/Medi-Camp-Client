import axios from 'axios';
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_LOCALHOST,
})
const usePublic = () => {
    return axiosSecure;
};

export default usePublic;