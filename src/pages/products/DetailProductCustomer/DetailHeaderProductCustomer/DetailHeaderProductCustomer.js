import "./DetailHeaderProductCustomer.css"
import {IoMailUnreadOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import {FaFacebook} from "react-icons/fa";
import {FaInstagram, FaRegUser, FaXTwitter} from "react-icons/fa6";
import logo from "../../../../assets/images/Logo-final.svg";
import SearchIcon from "@mui/icons-material/Search";
import {FiShoppingCart} from "react-icons/fi";
export default function DetailHeaderProductCustomer(){
    return(
        <>
            <>
                <div className="header-customer-detail-product">
                    <div className="header-top-customer-detail-product">
                        <div className="row">
                            <div className="col-6 header-top-left-customer-detail-product">
                                <ul>
                                    <li style={{color: "white"}}><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                    <li style={{color: "white"}}>Support diliver</li>
                                    <li><Link to={"/signUp"} style={{color: "white"}}>Kênh người bán</Link></li>

                                </ul>
                            </div>
                            <div className="col-6  header-top-right-customer-detail-product">
                                <ul>
                                    <span>Kết nối</span>
                                    <li><Link to={"https://web.facebook.com/"}><FaFacebook/></Link></li>
                                    <li><Link to={"#"}><FaInstagram/></Link></li>
                                    <li><Link to={"#"}><FaXTwitter/></Link></li>
                                    <li><Link to={"#"}><FaRegUser/></Link></li>
                                    {/*<li><span><Link to={"/login"}>Đăng Nhập</Link></span></li>*/}
                                    <li><span><Link to={"/login"}>UserName</Link></span></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-header-customer-detail-product">
                        <div className="main-detail-product-detail-product">
                            <div className="main-left-detail-product">
                                <div className="logo-home-detail-product">
                                    <Link to={"/customer"}>
                                        <img src={logo} alt=''/>
                                    </Link>

                                </div>
                            </div>
                            <div className="main-center-detail-product">
                                <div className="search-cover">

                                    <input type="text" placeholder={"Tìm kiếm..."}/>
                                    <button><SearchIcon/></button>


                                </div>


                            </div>
                            <div className="main-right-detail-product">
                                <div className="header-cart">
                                    <ul>
                                        <li>
                                            <Link to={"#"}><FiShoppingCart
                                                className={"color-white"}/><span>5</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}