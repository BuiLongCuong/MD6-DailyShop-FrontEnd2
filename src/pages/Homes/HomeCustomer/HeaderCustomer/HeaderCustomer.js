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
import {editCustomer, getCurrentCustomerDetails, logout} from "../../../../redux/service/customerService";
import {Field, Form, Formik} from "formik";
import {search} from "../../../../redux/service/productService";
import {countCartDetails} from "../../../../redux/service/oderService";
import BasicMenu from "../../../Cart/TestHeaderCustomer";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import * as React from 'react';

export default function HeaderCustomer() {
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const customer = useSelector(state => state.customer.currentCustomerLogin);
    console.log(customer)


    const countOrderInCart = useSelector(state => state.order.countCartDetails)
    console.log(countOrderInCart);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    useEffect(() => {
        dispatch(getCurrentCustomerDetails())
    }, []);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const kickOut = () => {
        dispatch(logout()).then(() => {
            navigate('/login')
        })
    };



    useEffect(() => {
        dispatch(countCartDetails())
    }, []);

    const searchName = (values) => {
        console.log(values.nameSearch)
        dispatch(search(values.nameSearch))
    }

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
                                    <li style={{color: "white", marginTop: "4px"}}><IoMailUnreadOutline/>dailyshop@gmail.com</li>
                                    <li style={{color: "white", marginTop: "4px"}}>Support diliver</li>
                                    <li style={{marginTop: "4px"}}><Link className={"supplier"} to={"/signIn"} style={{color: "white"}}>Kênh người bán</Link></li>

                                </ul>
                            </div>
                            <div className="col-6  header-top-right-customer">
                                <ul>
                                    <span style={{marginTop: "4px"}}>Kết nối</span>
                                    <li><Link to={"https://web.facebook.com/"}><FaFacebook/></Link></li>
                                    <li><Link to={"https://www.instagram.com/"}><FaInstagram/></Link></li>
                                    <li><Link to={"https://twitter.com/"}><FaXTwitter/></Link></li>
                                    {customer ?
                                        <div className="acc">
                                            <div className="user">
                                                <div className="avatar">
                                                    <img src={ customer.imageCustomer} alt=""/>
                                                </div>

                                                    <li><Link to={""} className={"customerName"}>
                                                        <div className={"account"}>
                                                            <Button
                                                                id="basic-button"
                                                                aria-controls={open ? 'basic-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                onClick={handleClick}
                                                                style={{color: "white"}}
                                                            >
                                                                {customer?.customerName}
                                                            </Button>
                                                            <Menu
                                                                id="basic-menu"
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleClose}
                                                                MenuListProps={{
                                                                    'aria-labelledby': 'basic-button',
                                                                }}
                                                            >
                                                                <Link className={"buttonInfor"} to={"/editInfoCus/" + customer.account.id}>
                                                                    <MenuItem><i className="fa-solid fa-file-invoice"></i> &nbsp;Thông tin
                                                                        của tôi</MenuItem></Link>
                                                                <Link className={"buttonInfor"} to={"/history/" + customer.account.id}>
                                                                    <MenuItem><i className="fa-solid fa-border-all"></i> &nbsp;Đơn
                                                                        hàng của tôi</MenuItem></Link>
                                                                <MenuItem onClick={kickOut}><i
                                                                    className="fa-solid fa-right-from-bracket"></i> &nbsp;Đăng
                                                                    xuất</MenuItem>
                                                            </Menu>
                                                        </div>
                                                    </Link></li>
                                            </div>

                                            {/*<li><span onClick={() => {*/}
                                            {/*    dispatch(logout()).then(() => {*/}
                                            {/*        navigate('/login')*/}
                                            {/*    })*/}
                                            {/*}}> Đăng xuất</span></li>*/}
                                        </div>
                                        : <li style={{marginTop: "4px", marginLeft: "2px"}}><span><Link className={"Login"} to={"/login"}>Đăng Nhập</Link></span></li>
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
                                                className={"color-white"}/><span>
                                                {
                                                    countOrderInCart
                                                }
                                            </span></Link>
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