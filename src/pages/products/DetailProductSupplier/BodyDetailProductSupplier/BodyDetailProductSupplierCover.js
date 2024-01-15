import "./BodyDetailProductSupplierCover.css"
import BodySideBarDetailProductSupplier from "../BodySideBarDetailProductSupplier/BodySideBarDetailProductSupplier";
import MainBodyDetailProductSupplier from "../MainBodyDetailProductSupplier/MainBodyDetailProductSupplier";
export default function BodyDetailProductSupplierCover(){
    return(
        <>
            <div className="body-detail-product-supplier-cover">
                <BodySideBarDetailProductSupplier/>
                <MainBodyDetailProductSupplier/>
            </div>
        </>
    )
}