import axios from 'axios'

const  base_URL = "https://vicishop.herokuapp.com/api";
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGI3Y2QxMjA5Y2MzM2EwYjcwYTkwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODQ1NTkxNSwiZXhwIjoxNjM4NzE1MTE1fQ.iKZRixG-fA7Dsox9vwcx970Ly700bzFS8mKKSRp30eo";

export const adminRequest = axios.create({
    baseURL : base_URL,
    headers: {
        token : "Beare " + TOKEN
    },


})