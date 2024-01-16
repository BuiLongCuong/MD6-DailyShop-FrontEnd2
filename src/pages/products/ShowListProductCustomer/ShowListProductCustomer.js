import "./ShowListProductCustomer.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAll} from "../../../redux/service/productService";
export default function ShowListProductCustomer(){
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAll())
    }, []);
    return(
        <>
            <div className="show-list-product-customer">
                <table style={{border: "1px solid #red"}}>

                </table>
            </div>
        </>
    )
}