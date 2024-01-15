import "./MainBodySupplier.css"
import ShowListProduct from "../../../products/ShowListProduct/ShowListProduct";
import {Outlet} from "react-router-dom";



export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body-supplier">
                <div className="content-supplier">
                    <Outlet/>
                    {/*<ShowListProduct/>*/}
                </div>
            </div>
        </>
    )
}