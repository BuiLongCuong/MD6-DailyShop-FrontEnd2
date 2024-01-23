import "./orderList.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {orderListForSupplier, supplierRights} from "../../../../redux/service/oderService";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import {format} from "date-fns";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function OrderListForSupplier() {
    const [open, setOpen] = useState(false);
    const [orderId,setOrderId] = useState(null);
    // const [stringg,setStringg] = useState('');
    const dispatch = useDispatch();
    const orderList = useSelector(({order}) => {
        // console.log(order.listOrderForSupplier)
        return order.listOrderForSupplier;
    })

    const handleOpenOK = (id) => {
        setOrderId(id)
        // setStringg('Paid');
        setOpen(true);
    };

    const handleCloseOK = () => {
        setOrderId(null);
        // setStringg(null)
        setOpen(false);
    };

    const handleOpenKO = (id) => {
        setOrderId(id)
        setOpen(true);
    };

    const handleCloseKO = () => {
        setOrderId(null)
        setOpen(false);
    };

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

    const checkStatus = (value) => {
        switch (value) {
            case 'Paid':
                return (
                        <>
                            <aside style={{backgroundColor: '#52f705'}}>Chốt đơn</aside>
                        </>
                    )
                break;
            case 'Unpaid':
                return (
                    <>
                        <aside style={{backgroundColor: '#02f7eb'}}>Đang chờ</aside>
                    </>
                )
                break;
            case 'Cancel':
                return (
                    <>
                        <aside style={{backgroundColor: '#f70b02'}}>Đã hủy</aside>
                    </>
                )
                break;
        }
    }

    useEffect(() => {
        dispatch(orderListForSupplier())
    }, []);

    const supplierRightss = () => {
        // let data = {
        //     orderId,
        //     // stringg
        // }
        dispatch(supplierRights(orderId)).then((res) => {
            console.log(res.data);
        })
    }

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
                        <div className="cate-he-time center">Thời gian đặt hàng</div>
                        <div className="cate-he center">Trạng thái</div>
                        <div className="action center">Thao tác</div>
                    </div>

                    {orderList && orderList.map((order) =>(
                        <>
                        <div className="">
                                {order.orderDetails && order.orderDetails.map((orderDetails) => (
                                    <>
                                    <div className="main-table">
                                        <div className="check-he ma"><input type="checkbox"/></div>
                                        <div className="name-he name-ma ma">
                                            <img src={orderDetails.product.photo[0]?.photoName} alt=""/>
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



                                    </div>
                                    </>
                                ))}
                            <div>
                                <div className="cate-he ma">{formatLocalDateTime(order.orderDate)}</div>
                                <div className="cate-he ma">{checkStatus(order.orderStatus)}</div>

                                <div className="action ma">
                                    <Button onclick={() => handleOpenOK(order.orderId)}>Xác nhận</Button>
                                    <Button onClick={() => handleOpenKO(order.orderId)}>Hủy dơn</Button>
                                </div>
                            </div>

                            <div>
                                <div className="name-he center">Tổng:</div>
                                <div className="price-he ma">
                                    {formatToCurrency(order.totalMoney)}
                                </div>
                            </div>

                        </div>
                        </>
                    ))}
                </div>
            </div>

            {/*Hiển thị modal hỏi trước khi xóa*/}
            <Modal
                open={open}
                onClose={handleCloseOK}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Chốt đơn hàng này!!!
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Bạn có muốn chốt đơn này không ???
                    </Typography>
                    <Button onclick={() => supplierRightss()}>Đồng ý</Button>
                    <Button onClick={handleCloseOK}>Quay lại</Button>
                </Box>
            </Modal>

            <Modal
                open={open}
                onClose={handleCloseKO}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Hủy đơn hàng!!!
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Bạn có chắc chắn muốn hủy đơn này không ???
                    </Typography>
                    <Button onclick={() => supplierRightss()}>Đồng ý</Button>
                    <Button onClick={handleCloseKO}>Quay lại</Button>
                </Box>
            </Modal>

        </>
    )
}