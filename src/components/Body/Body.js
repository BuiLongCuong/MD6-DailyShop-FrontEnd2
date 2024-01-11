import "./Body.css"
import MainBody from "./MainBody/MainBody";
import BodyAds from "./BodyAds/BodyAds";
import BodySideBar from "./BodySideBar/BodySideBar";
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