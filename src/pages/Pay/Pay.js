import "./Pay.css";
import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentCustomerDetails} from "../../redux/service/customerService";
import {payment} from "../../redux/service/oderService";

export default function Pay() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.customer.currentCustomerDetails)
    const payments = useSelector(state => {
        return state?.order?.payment_detail

    })
    console.log(payments)
    const length_detail = () => {
        for (let i = 0; i < payments.length - i; i++) {
            // console.log(payments[i].orderDetails)
            if (payments.length === 1) {
                return (payments[i].orderDetails.length)
            } else {
                return (payments[i].orderDetails.length + payments[i + 1].orderDetails.length)
            }
        }
    }
    const sum = () => {
        for (let i = 0; i < payments.length - i; i++) {
            if (payments.length === 1) {
                return (payments[i].totalMoney)
            } else {
                return (payments[i].totalMoney + payments[i + 1].totalMoney)
            }
        }
    }

    useEffect(() => {
        dispatch(getCurrentCustomerDetails());
        dispatch(payment())
    }, [])

    return (
        <>
            <HeaderCustomer/>
            <div className="content-pay">
                <div className="body-pay">
                    <div className="address-pay">
                        <div className="address-product">
                            <div className="ship"><i className="fa-solid fa-location-dot" style={{
                                color: "#e01f1f"
                            }}></i>
                                <span className={"adr"}>Địa Chỉ Nhận Hàng</span>
                            </div>
                        </div>
                        <div className="name-payPr">
                            <div className="name-cus">
                                {user?.customerName} ({user?.phone})
                            </div>
                            <div className="address-cus">
                                {/*Thôn Dương Cốc Đồng Quang, Xã Đồng Quang, Huyện Quốc Oai, Hà Nội*/}
                                {user?.specificAddress}
                            </div>
                            <div className="edit-cus">
                                <Link to={"#"}>Thay Đổi</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pay">
                        {
                            payments && payments.map((item) => {
                                return (
                                    <>
                                        <div className="form-prCus">
                                            <div className="header-pr">
                                                <div className="body-header">
                                                    <div className="sp">Sản Phẩm</div>
                                                    <div className="pr">Đơn Giá</div>
                                                    <div className="Qt">Số Lượng</div>
                                                    <div className="sum-Pr">Tổng Tiền</div>
                                                </div>
                                            </div>
                                            <div className="PO">
                                                <div className="name">
                                                    <div className="iconShop">
                                                        <i className="fa-solid fa-shop"></i>
                                                    </div>
                                                    <div className="nameShop">{
                                                        item?.supplier?.supplierName
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                item && item.orderDetails.map(od => (
                                                    <>
                                                        <div>

                                                            <div className="pr-pay">
                                                                <div className="price-products">
                                                                    <div className="div">
                                                                        <img className={"img-pay"}
                                                                             src={od.product.photo[0].photoName}
                                                                             alt=""/>
                                                                        <span
                                                                            className={"text-pay"}>{od.product.productName}</span>
                                                                    </div>
                                                                    <div className="div1">
                                                                        <span>Loại: {od?.product?.category?.name}</span>
                                                                    </div>
                                                                    <div className="div2">
                                                                        <span>₫ {od?.product?.price}</span>
                                                                    </div>
                                                                    <div className="div3">
                                                                        <span>{od?.quantity}</span>
                                                                    </div>
                                                                    <div className="div5">
                                                                        <span>₫ {od?.product?.price * od?.quantity}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </>
                                                ))
                                            }


                                        </div>

                                    </>

                                )
                            })

                        }
                        <div className="totalAmount">
                            <div className="body-amount">
                                <div className="total">
                                    <div className="sum-pr">Tổng số tiền ({length_detail()} sản phẩm):</div>
                                    <span className={"sum-cs"}>₫ {sum() && sum()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );


};