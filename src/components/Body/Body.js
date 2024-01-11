
import "./Body.css"
import BodySideBar from "./BodySideBar/BodySideBar";
import MainBody from "./MainBody/MainBody";
import BodyAds from "./BodyAds/BodyAds";
export default function Body(){
    return(
        <>
            <div className="body">
                <BodySideBar/>
                <MainBody/>
                <BodyAds/>
            </div>


        </>
    )
}