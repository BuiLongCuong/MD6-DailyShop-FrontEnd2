import "./MainBody.css"
import {Outlet} from "react-router-dom";
import MainBodyAbove from "../MainBodyAbove/MainBodyAbove";
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