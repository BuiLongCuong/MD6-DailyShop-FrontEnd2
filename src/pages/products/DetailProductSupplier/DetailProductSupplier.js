import "./DetailProductSupplier.css"
import Header from "../../../components/Header/Header";
import HeaderSupplier from "../../Homes/HomeSupplier/HeaderSupplier/HeaderSupplier";
import Footer from "../../../components/Footer/Footer";
import BodyDetailProductSupplierCover from "./BodyDetailProductSupplier/BodyDetailProductSupplierCover";
import {Link} from "react-router-dom";

export default function DetailProductSupplier(){
    return(
        <>
            <HeaderSupplier/>
            <BodyDetailProductSupplierCover/>
            <Link to={"#"}>
                <button className={"add-product-supplier"}>
                    + Thêm mới sản phẩm
                </button>
            </Link>
            <Footer/>

        </>
    )
}