import axios, {get} from "axios";

export function getAxios() {
    const currentUser = JSON.parse(localStorage.getItem("currentCustomer"));
    if (currentUser){
        return axios.create({
            baseURL: "http://localhost:8088",
            headers:{ Authorization:`Bearer ${currentUser.accessToken}`}
        })
    }
    else {
        return axios.create({
            baseURL: "http://localhost:8088"
        })
    }

}