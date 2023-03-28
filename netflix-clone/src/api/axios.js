import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themovieDB.org/3",
    params:{
        api_key:"9fe30be410bce5b8c8fbf28600604317",
        language : "ko-KR"
    },
})

export default instance;