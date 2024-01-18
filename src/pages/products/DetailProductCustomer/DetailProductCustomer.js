import "./DetailProductCustomer.css"
import HeaderCustomer from "../../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import DetailBodyProductCustomer from "./DetailBodyProductCustomer/DetailBodyProductCustomer";
import DetailHeaderProductCustomer from "./DetailHeaderProductCustomer/DetailHeaderProductCustomer";
import Footer from "../../../components/Footer/Footer";
export default function DetailProductCustomer(){
    return(
        <>
            <HeaderCustomer/>
            <DetailBodyProductCustomer/>
            <Footer/>
        </>
    )
}