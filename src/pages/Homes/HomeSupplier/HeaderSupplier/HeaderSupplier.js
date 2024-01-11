import "./HeaderSupplier.css"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";
import {FaRegUser} from "react-icons/fa6";
import {IoMailUnreadOutline} from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
export default function HeaderSupplier(){
    return(
        <>
            <div className="header">
                <div className="header-top">
                    <div className="row">
                        <div className="col-6 header-top-left">
                            <ul>
                                <li><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                <li>Support diliver</li>
                                <li><Link to={"#"}>Chủ shop : </Link></li>

                            </ul>
                        </div>
                        <div className="col-6  header-top-right">
                            <ul>
                                <li><Link to={"https://web.facebook.com/"}><FaFacebook/></Link></li>
                                <li><Link to={"#"}><FaInstagram/></Link></li>
                                <li><Link to={"#"}><FaXTwitter/></Link></li>
                                <li><Link to={"#"}><FaRegUser/></Link>
                                    {/*<span style={{color: 'black'}}>Đăng Nhập</span>?*/}
                                </li>
                                <li className={"signIn"}><Link to={"#"}>Ten chu shop</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <div className="body">
                <div className="main">
                    <div className="main-left">
                        <div className="logo">
                            <img src="../../public/img.png" alt=""/>
                        </div>
                    </div>
                    <div className="main-center">
                        <div className="search-cover">

                            <input type="text" placeholder={"Search..."}/>
                            <button><SearchIcon/></button>


                        </div>


                    </div>
                    <div className="main-right">
                        <div className="header-cart">
                            <ul>
                                <li>
                                    <Link to={"#"}><FiShoppingCart className={"color-white"}/><span>5</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}