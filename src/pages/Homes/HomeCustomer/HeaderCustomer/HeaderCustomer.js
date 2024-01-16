import "./HeaderCustomer.css"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";
import {FaRegUser} from "react-icons/fa6";
import {IoMailUnreadOutline} from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../../../assets/images/Logo-final.svg"

export default function HeaderCustomer() {
    return (
        <>
            <>
                <div className="header-customer">
                    <div className="header-top-customer">
                        <div className="row">
                            <div className="col-6 header-top-left-customer">
                                <ul>
                                    <li style={{color: "white"}}><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                    <li style={{color: "white"}}>Support diliver</li>
                                    <li><Link to={"/signUp"} style={{color: "white"}}>Kênh người bán</Link></li>

                                </ul>
                            </div>
                            <div className="col-6  header-top-right-customer">
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
                    <div className="main-header-customer">
                        <div className="main">
                            <div className="main-left">
                                <div className="logo-home">
                                    <img src={logo} alt=''/>
                                </div>
                            </div>
                            <div className="main-center">
                                <div className="search-cover">

                                    <input type="text" placeholder={"Tìm kiếm..."}/>
                                    <button><SearchIcon/></button>


                                </div>


                            </div>
                            <div className="main-right">
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