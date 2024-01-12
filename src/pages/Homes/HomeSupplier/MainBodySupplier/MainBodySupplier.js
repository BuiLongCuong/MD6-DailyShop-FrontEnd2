import "./MainBodySupplier.css"
import MainBodyAboveSupplier from "../MainbodyAboveSupplier/MainBodyAboveSupplier";
import {Link} from "react-router-dom";



export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body-supplier">
                <MainBodyAboveSupplier/>

                    <Link to={"#"}>
                        <button className={"add-product"}>
                           + Thêm mới sản phẩm
                        </button>
                    </Link>


            </div>
        </>
    )
}