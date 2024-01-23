import './OrderManagement.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import {format} from "date-fns";
import {orderListForSupplier} from "../../redux/service/oderService";

export default function OrderListForSupplier() {
    const dispatch = useDispatch();
    const orderList = useSelector(({order}) => {
        console.log(order.listOrderForSupplier)
        return order.listOrderForSupplier;
    })

    const formatLocalDateTime = (localDateTime) => {
        if (!localDateTime) {
            return '';
        }
        return format(localDateTime, 'HH:mm:ss dd-MM-yyyy');
    };
    const formatToNumberWithCommas = (value) => {
        return new Intl.NumberFormat('vi-VN').format(value);
    };
    const formatToCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    useEffect(() => {
        dispatch(orderListForSupplier())
    }, []);

    return (
        <>
            {/*<div className="title-product">*/}
            {/*    Tất cả các sản phẩm: {orderList && orderList.map((order) =>(*/}
            {/*        <>*/}
            {/*            {order.orderDetails && order.orderDetails.map((orderDetails) => {*/}
            {/*                orderDetails.length*/}
            {/*            })}*/}
            {/*        </>*/}
            {/*))}*/}
            {/*</div>*/}
            <div className="list-product">
                <div className="table-product">
                    <div className="header-table">
                        <div className="check-he center"><input type="checkbox"/></div>
                        <div className="name-he center">Tên sản phẩm</div>
                        <div className="cate-he center">Đơn giá (VNĐ)</div>
                        <div className="quantity-he center">Số lượng</div>
                        <div className="price-he center">
                            Tổng giá (VNĐ)
                        </div>
                        <div className="cate-he-time center2">Thời gian đặt hàng</div>
                        <div className="cate-he center">Trạng thái</div>
                        <div className="action center">Thao tác</div>
                    </div>

                    {orderList && orderList.map((order) =>(
                        <>
                            {order.orderDetails && order.orderDetails.map((orderDetails) => (
                                <>
                                    <div className="main-table">
                                        <div className="check-he ma"><input type="checkbox"/></div>
                                        <div className="name-he name-ma ma"><img src={orderDetails.product.photo[0]?.photoName} alt=""/>
                                            <div className="name-p">
                                                <Link to={"/supplier/detail/" + orderDetails.product.productID}>
                                                    {orderDetails.product.productName}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="price-he ma">
                                            {formatToCurrency(orderDetails.price)}
                                        </div>
                                        <div className="quantity-he ma"> {formatToNumberWithCommas(orderDetails.quantity)}</div>
                                        <div className="price-he ma">{formatToCurrency(parseInt(orderDetails.price * orderDetails.quantity))}</div>
                                        <div className="cate-he ma1">{formatLocalDateTime(order.orderDate)}</div>
                                        <div className="cate-he ma">{
                                            // checkStatus(
                                            order.orderStatus
                                            // )
                                        }</div>

                                        <div className="action ma">
                                            <Button>Xac nhan</Button>
                                            <Button>Huy don</Button>
                                        </div>

                                    </div>
                                </>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}