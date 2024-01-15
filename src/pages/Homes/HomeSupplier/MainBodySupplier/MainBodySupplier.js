import "./MainBodySupplier.css"
import ShowListProduct from "../../../products/ShowListProduct/ShowListProduct";



export default function MainBodySupplier(){
    return(
        <>
            <div className="main-body-supplier">
                <div className="content-supplier">
                    <ShowListProduct/>
                </div>
            </div>
        </>
    )
}