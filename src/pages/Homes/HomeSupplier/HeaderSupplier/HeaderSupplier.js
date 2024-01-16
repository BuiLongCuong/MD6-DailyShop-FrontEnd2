import "./HeaderSupplier.css"
import {useSelector} from "react-redux";

export default function HeaderSupplier(){
    const currentSupplier = useSelector(({supplier})=>{
        return supplier.currentSupplierDetails;
    })

    // const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
    return(
        <>
            <div className="header_supplier">
                <div className="left">
                    <div className="logo"><img src="/images/img_8.png" alt=""/></div>
                    <div className="currentPage">Kênh Người Bán</div>
                </div>
                <div className="right">
                    <div className="user">
                        <div className="avatar">
                            <img src={currentSupplier.imageSupplier ? currentSupplier.imageSupplier: "https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg"} alt=""/>
                        </div>
                        <div className="username">
                            {
                                currentSupplier.supplierName
                            }
                        </div>
                    </div>
                    <div className="notification"><i className="fa-regular fa-bell"></i><div>2</div></div>
                </div>
            </div>
        </>
    )
}