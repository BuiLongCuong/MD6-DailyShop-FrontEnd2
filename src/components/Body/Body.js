import BodySideBar from "./BodySideBar";
import BodyAds from "./BodyAds";
import MainBody from "./MainBody";
import "./Body.css"
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