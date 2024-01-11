import "./Navbar.css"
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
            <div className="nav-bar">
                <div className="nav-bar-left">
                    <img src="https://tailieutinhoc.com/wp-content/uploads/2023/09/backdrop-tet-nguyen-dan-6.jpg"
                         alt=""/>
                </div>
                <div className="nav-bar-center">
                    <ul>
                        <li><Link to={"#"}>TRANG CHỦ</Link></li>
                        <li><Link to={"#"}>CỬA HÀNG</Link></li>
                        <li><Link to={"#"}>SẢN PHÂM</Link></li>
                        <li><Link to={"#"}>BÀI VIẾT</Link></li>
                        <li><Link to={"#"}>LIÊN HỆ</Link></li>
                    </ul>
                </div>
                <div className="nav-bar-right">
                    <img src="https://tailieutinhoc.com/wp-content/uploads/2023/09/backdrop-tet-nguyen-dan-6.jpg"
                         alt=""/>
                </div>

            </div>
        </>
    )
}