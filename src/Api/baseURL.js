import axios from 'axios';


const baseUrl = axios.create({baseURL: "https://api-dev.rescounts.com"})


export default baseUrl;