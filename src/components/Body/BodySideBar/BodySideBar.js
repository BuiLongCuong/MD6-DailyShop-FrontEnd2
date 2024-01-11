import "./BodySideBar.css"
import {Link} from "react-router-dom";
export default function BodySideBar(){
    return(
        <>
            <div className="side-bar">
                <div className="side-bar-above">
                    <div className="side-bar-above-left">

                    </div>
                    <div className="side-bar-above-right">
                        <ul>
                            <li><Link to={"#"}>Thiết bị điện tử</Link></li>
                            <li><Link to={"#"}>Phụ kiện điện tử</Link></li>
                            <li><Link to={"#"}>Sức khỏe và làm đẹp</Link></li>
                            <li><Link to={"#"}>Thực phẩm tươi</Link></li>
                            <li><Link to={"#"}>Du lịch</Link></li>
                            <li><Link to={"#"}>Phụ kiện nữ giới</Link></li>
                            <li><Link to={"#"}>Phụ kiện trẻ em</Link></li>
                            <li><Link to={"#"}>Phụ kiện nam giới</Link></li>
                            <li><Link to={"#"}>Thiết bị điện gia dụng</Link></li>
                            <li><Link to={"#"}>Thiết bị định vị</Link></li>
                            <li><Link to={"#"}>Hàng gia dụng</Link></li>

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