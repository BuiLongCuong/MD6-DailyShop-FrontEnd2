import "./MainBodySupplier.css"
import MainBodyAboveSupplier from "../MainbodyAboveSupplier/MainBodyAboveSupplier";
import {Link} from "react-router-dom";
import ListProduct from "../../../products/ListProduct/ListProduct";
import ShowListProduct from "../../../products/ShowListProduct/ShowListProduct";


export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body-supplier">
                <MainBodyAboveSupplier/>
                <ShowListProduct/>
                    <Link to={"#"}>
                        <button className={"add-product"}>
                           + Thêm mới sản phẩm
                        </button>
                    </Link>


            </div>
        </>
    )
}