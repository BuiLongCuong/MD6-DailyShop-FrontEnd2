import axios, {get} from "axios";

export function getAxios() {
    // const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
    // const currentUser = JSON.parse(localStorage.getItem("currentSupplier"));
    // const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"));
    // if (currentUser){
    //     return axios.create({
    //         baseURL: "http://localhost:8088",
    //         headers:{ Authorization:`Bearer ${currentUser.accessToken}`}
    //     })
    // }else if (currentSupplier) {
    //     return axios.create({
    //         baseURL: "http://localhost:8088",
    //         headers: {"Authorization": `Bearer ${currentSupplier.accessToken}`}
    //     })
    // }else if (currentCustomer) {
    //     return axios.create({
    //         baseURL: "http://localhost:8088",
    //         headers: {"Authorization": `Bearer ${currentCustomer.accessToken}`}
    //     })
    // }
    // else {
        return axios.create({
            baseURL: "http://localhost:8088"
        })
    // }
}

export const getCustomerUrl = () => {
    const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"));
    if (currentCustomer) {
        return axios.create({
            baseURL: "http://localhost:8088",
            headers: {"Authorization": `Bearer ${currentCustomer.accessToken}`}
        })
    } else {
        return axios.create({
            baseURL: "http://localhost:8088"
        })
    }
}
export const getSupplierUrl = () => {
    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
    if (currentSupplier) {
        return axios.create({
            baseURL: "http://localhost:8088",
            headers: {"Authorization": `Bearer ${currentSupplier.accessToken}`}
        })
    } else {
        return axios.create({
            baseURL: "http://localhost:8088"
        })
    }
}
