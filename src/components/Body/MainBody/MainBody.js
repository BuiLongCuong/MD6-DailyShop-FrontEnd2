import "./MainBody.css"
import MainBodyAbove from "./MainBodyAbove";
import {Outlet} from "react-router-dom";
export default function MainBody(){
    return(
        <>
            <div className="main-body">
                <MainBodyAbove/>
                <Outlet/>
            </div>

        </>
    )
}