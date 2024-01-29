// import "./BodySideBarSupplier.css";
// import {Link} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {getCurrentSupplierDetails} from "../../../../redux/service/supplierService";
//
// export default function BodySideBarSupplier() {
//     const dispatch = useDispatch();
//     const supplier = useSelector(state => state.supplier.currentSupplierDetails)
//     useEffect(() => {
//         dispatch(getCurrentSupplierDetails())
//     }, []);
//     return (
//         <>
//             <div className="side-bar">
//                 <div className="item">
//                     <i className="fa-brands fa-product-hunt"></i>
//                     <Link to={"/supplier/products"} className={"link"}>
//                         <span className={"link"}>Quản lý sản phẩm</span></Link>
//                 </div>
//                 <div className="item">
//                     <i className="fa-brands fa-product-hunt"></i>
//                     <Link to={"/supplier/add"} className={"link"}>
//                         <span className={"link"}>Thêm sản phẩm mới</span></Link>
//                 </div>
//                 <div className="item">
//                     <i className="fa-brands fa-product-hunt"></i> <Link
//                     to={"/supplier/editInfoSupp/" + supplier?.account?.id} className={"link"}>
//                     <span>Thông tin cá nhân</span></Link>
//                 </div>
//                 <div className="item">
//                     <i className="fa-brands fa-product-hunt"></i> <Link
//                     to={"/supplier/orderManagement"} className={"link"}>
//                     <span>Quản lí đơn hàng</span></Link>
//                 </div>
//             </div>
//         </>
//     )
// }
import "./BodySideBarSupplier.css";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCurrentSupplierDetails} from "../../../../redux/service/supplierService";

export default function BodySideBarSupplier() {
    const dispatch = useDispatch();
    const supplier = useSelector((state) => state.supplier.currentSupplierDetails);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(null);

    useEffect(() => {
        dispatch(getCurrentSupplierDetails());
    }, [dispatch]);

    useEffect(() => {
        // Tìm tab tương ứng dựa trên đường dẫn URL
        const tab = location.pathname.split("/").pop();
        setActiveTab(tab);
    }, [location.pathname]);

    return (
        <>
            <div className="side-bar">
                <div className={`item ${activeTab === "products" ? "active" : ""}`}>
                    <i className="fa-brands fa-product-hunt"></i>{" "}
                    <Link to={"/supplier/products"} className={"link"}>
                        <span className={"link"}>Quản lý sản phẩm</span>
                    </Link>
                </div>
                <div className={`item ${activeTab === "add" ? "active" : ""}`}>
                    <i className="fa-brands fa-product-hunt"></i>{" "}
                    <Link to={"/supplier/add"} className={"link"}>
                        <span className={"link"}>Thêm sản phẩm mới</span>
                    </Link>
                </div>
                <div className={`item ${activeTab === "editInfoSupp" ? "active" : ""}`}>
                    <i className="fa-brands fa-product-hunt"></i>{" "}
                    <Link to={"/supplier/editInfoSupp/" + supplier?.account?.id} className={"link"}>
                        <span>Thông tin cá nhân</span>
                    </Link>
                </div>
                <div className={`item ${activeTab === "orderManagement" ? "active" : ""}`}>
                    <i className="fa-brands fa-product-hunt"></i>{" "}
                    <Link to={"/supplier/orderManagement"} className={"link"}>
                        <span>Quản lí đơn hàng</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
