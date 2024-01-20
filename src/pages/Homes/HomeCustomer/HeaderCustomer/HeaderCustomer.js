import "./HeaderCustomer.css"
import {FaFacebook} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import {FaXTwitter} from "react-icons/fa6";
import {FaRegUser} from "react-icons/fa6";
import {IoMailUnreadOutline} from "react-icons/io5";
import {FiShoppingCart} from "react-icons/fi";
import {Link, useLocation, useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../../../assets/images/Logo-final.svg"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCustomerDetails, logout} from "../../../../redux/service/customerService";
import {Field, Form, Formik} from "formik";
import {search} from "../../../../redux/service/productService";

export default function HeaderCustomer() {
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath);
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customer.currentCustomerDetails)

    const logOut = () => {
        localStorage.removeItem("currentCustomer")
    }
    const searchName = (values) => {
        console.log(values.nameSearch)
        dispatch(search(values.nameSearch))
    }
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCurrentCustomerDetails())
    }, []);


    return (
        <>
            <>
                <div className={`header-customer ${currentPath.includes("/products") ? "non-sticky" : ""}`}>
                    <div className="header-top-customer">
                        <div className="row">
                            <div className="col-6 header-top-left-customer">
                                <ul>
                                    <li style={{color: "white"}}><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                    <li style={{color: "white"}}>Support diliver</li>
                                    <li><Link to={"/signIn"} style={{color: "white"}}>Kênh người bán</Link></li>

                                </ul>
                            </div>
                            <div className="col-6  header-top-right-customer">
                                <ul>
                                    <span>Kết nối</span>
                                    <li><Link to={"https://web.facebook.com/"}><FaFacebook/></Link></li>
                                    <li><Link to={"https://www.instagram.com/"}><FaInstagram/></Link></li>
                                    <li><Link to={"https://twitter.com/"}><FaXTwitter/></Link></li>
                                    {customer ?
                                        <div className="acc">
                                            <li><Link to={"#"}><FaRegUser/></Link></li>
                                            <li><Link to={"/login"} className={"customerName"}><span>{customer?.customerName}</span></Link></li>
                                            <li><span onClick={()=>{
                                                dispatch(logout()).then(() => {
                                                    navigate('/login')
                                                })
                                            }}> Đăng xuất</span></li>
                                        </div>
                                        : <li><span><Link to={"/login"}>Đăng Nhập</Link></span></li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-header-customer">
                        <div className="main">
                            <div className="main-left">
                                <div className="logo-home">
                                    <Link to={"/customer"}>
                                        <img src={logo} alt=''/>
                                    </Link>

                                </div>
                            </div>
                            <div className="main-center">
                                <Formik initialValues={
                                    {
                                        nameSearch: ""
                                    }
                                } onSubmit={searchName}>
                                    <Form className={"form-search"}>
                                        <div className="search-cover">

                                            <Field type="text" placeholder={"Tìm kiếm..."} name={"nameSearch"}/>
                                            <button type={"submit"}><SearchIcon/></button>


                                        </div>
                                    </Form>
                                </Formik>


                            </div>


                            <div className="main-right">
                                <div className="header-cart">
                                    <ul>
                                        <li>
                                            <Link to={"/cart"}><FiShoppingCart
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