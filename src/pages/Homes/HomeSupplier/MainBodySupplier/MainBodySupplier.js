import "./MainBodySupplier.css"
import MainBodyAboveSupplier from "../MainbodyAboveSupplier/MainBodyAboveSupplier";
import {Outlet} from "react-router-dom";
import MainBodyBottomSupplier from "../MainBodyBottomSupplier/MainBodyBottomSupplier";
export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body">
                <MainBodyAboveSupplier/>
                <MainBodyBottomSupplier/>
            </div>
        </>
    )
}