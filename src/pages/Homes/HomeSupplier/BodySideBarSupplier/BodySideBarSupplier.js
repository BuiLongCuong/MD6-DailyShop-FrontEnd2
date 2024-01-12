import "./BodySideBarSupplier.css"
import {Link} from "react-router-dom";
export default function BodySideBarSupplier(){
    return(
        <>
            <div className="side-bar">
                <div className="side-bar-above">
                    <div className="side-bar-above-left">

                    </div>
                    <div className="side-bar-above-right">
                        <ul>
                            <li><Link to={"#"}>Vận chuyển</Link></li>
                            <li><Link to={"#"}>Quản lý đơn hàng</Link></li>
                            <li><Link to={"#"}>Tất cả sản phẩm</Link></li>
                            <li><Link to={"#"}>Sản phẩm vi phạm</Link></li>
                            <li><Link to={"#"}>Kênh marketing</Link></li>
                            {/*<li><Link to={"#"}>Phụ kiện nữ giới</Link></li>*/}
                            {/*<li><Link to={"#"}>Phụ kiện trẻ em</Link></li>*/}
                            {/*<li><Link to={"#"}>Phụ kiện nam giới</Link></li>*/}
                            {/*<li><Link to={"#"}>Thiết bị điện gia dụng</Link></li>*/}
                            {/*<li><Link to={"#"}>Thiết bị định vị</Link></li>*/}
                            {/*<li><Link to={"#"}>Hàng gia dụng</Link></li>*/}

                        </ul>
                    </div>
                </div>
                <div className="side-bar-bottom">
                    <div className={"card-title"}><h5> Thanh toán </h5></div>
                    <div className="card">
                        <p className="visa"></p>
                        <p className="master-card"></p>
                        <span className="jcb"></span>
                        <span className="cash-on-diliver"></span>
                        <span className="napas"></span>
                        <span className="zalo-pay"></span>
                    </div>


                </div>
            </div>
        </>
    )
}