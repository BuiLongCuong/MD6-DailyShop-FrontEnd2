import "./BodySupplier.css"
import BodyAdsSupplier from "../BodyAdsSupplier/BodyAdsSupplier";
import BodySideBarSupplier from "../BodySideBarSupplier/BodySideBarSupplier";
import MainBodySupplier from "../MainBodySupplier/MainBodySupplier";
export default function BodySupplier(){
    return(
        <>
            <div className="bodySupplier">
                <BodySideBarSupplier/>
                <MainBodySupplier/>
                <BodyAdsSupplier/>
            </div>
        </>
    )
}