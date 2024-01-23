import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import './TransactionHistory.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {transactionHistory} from "../../redux/service/oderService";

export default function TransactionHistory() {
    const dispatch = useDispatch();
    // const customer = useSelector(state => state.customer.currentCustomerDetails)
    // console.log(customer)
    const transaction = useSelector(state => state.order.transactionHistory);
    console.log(1)
    console.log(transaction);

    const formatToCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    useEffect(() => {
        dispatch(transactionHistory())
    }, []);
    return (
        <>
            <HeaderCustomer/>
            <>
                {
                    transaction && transaction.map((item) => (

                        <div className="bodyHistory">
                            <div className="mainHistory">
                                <div className="row1Main">
                                    <div className="col1NameShop">
                                        {item.supplier.supplierName}
                                    </div>
                                    <div className="col2Notification">
                                        <div className="tittleNoti">
                                            <i className="fa-solid fa-truck"></i> &nbsp;
                                            Đơn hàng đã được giao thành công
                                        </div>
                                        <div className="finish">
                                            &nbsp;| {item.orderStatus}
                                        </div>
                                    </div>

                                </div>


                                {
                                    item.orderDetails && item.orderDetails.map((orderDetail) => (

                                        <div className="row2Main">
                                            <div className="col1Img">
                                                <img src={orderDetail?.product?.photo[0]?.photoName} alt=""
                                                     style={{width: "90px", height: "90px"}}/>
                                            </div>
                                            <div className="col2Info">
                                                <div className="row1Info">
                                                    {orderDetail.product?.productName}
                                                </div>
                                                <div className="row2Info">
                                                    {orderDetail?.product?.category?.name}
                                                </div>
                                                <div className="row3Info">
                                                    {orderDetail?.quantity}
                                                </div>
                                            </div>
                                            <div className="col3Price">
                                                {/*123.000 VNĐ*/}
                                                {formatToCurrency(orderDetail.price)}
                                            </div>

                                        </div>
                                    ))
                                }

                                <div className="row3Main">
                                    <div className="total">
                                        <div className="tittleTotal">
                                            Thành tiền:
                                        </div>
                                        <div className="numberTotal">
                                            {/*789.000 VNĐ*/}
                                            {formatToCurrency(item.totalMoney)}
                                        </div>
                                    </div>
                                    <div className="function">
                                        <div className="repurchase">
                                            <button>Mua lại</button>
                                        </div>
                                        <div className="contact">
                                            <button>Liên hệ người bán</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </>
        </>
    )
}