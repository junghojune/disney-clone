import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "8849adabcff8518e839619906e371ee6",
        language: "ko-KR"
    }
})

export default instance;