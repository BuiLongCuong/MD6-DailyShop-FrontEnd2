import "./BodySupplier.css"

import BodySideBarSupplier from "../BodySideBarSupplier/BodySideBarSupplier";
import MainBodySupplier from "../MainBodySupplier/MainBodySupplier";
export default function BodySupplier(){
    return(
        <>
            <div className="bodySupplier">
                <BodySideBarSupplier/>
                <MainBodySupplier/>
            </div>
        </>
    )
}