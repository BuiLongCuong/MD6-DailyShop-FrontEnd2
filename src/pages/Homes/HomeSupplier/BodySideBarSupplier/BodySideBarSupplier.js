import "./BodySideBarSupplier.css";
import {Link} from "react-router-dom";
export default function BodySideBarSupplier(){
    return(
        <>
            <div className="side-bar">
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i>
                    <Link to={"/supplier/products"}>
                    <span>Quản lý sản phẩm</span></Link>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i>
                    <Link to={"/supplier/add"}>
                    <span>Thêm sản phẩm mới</span></Link>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
                <div className="item">
                    <i className="fa-brands fa-product-hunt"></i> <span>Quản lý đơn hàng</span>
                </div>
            </div>
        </>
    )
}