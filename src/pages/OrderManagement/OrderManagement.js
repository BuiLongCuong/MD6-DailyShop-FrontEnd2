import toast, {Toaster} from "react-hot-toast";
import './OrderManagement.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import {format} from "date-fns";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {orderListForSupplier, supplierRights} from "../../redux/service/oderService";

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
    const [orderId,setOrderId] = useState();
    const dispatch = useDispatch();
    const orderList = useSelector(({order}) => {
        console.log(order.listOrderForSupplier)
        return order.listOrderForSupplier;
    })

    const handleOpen = (id) => {
        setOrderId(id)
        setOpen(true);
        // supplierCancel(id)
    };

    const handleClose = () => {
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
                        <aside style={{backgroundColor: '#fc0505'}}>Đã hủy</aside>
                    </>
                )
                break;
        }
    }

    useEffect(() => {
        dispatch(orderListForSupplier())
    }, []);

    const supplierPaid = (id) => {
        let data = {
            orderId:id,
            orderStatus:"Paid"
        }
        console.log(data)
        dispatch(supplierRights(data)).then(() => {
            toast.success('Chốt đơn thành công!!!');
            setTimeout(() => {
                dispatch(orderListForSupplier())
            }, 1000)
        })
    }

    const supplierCancel = () => {
        let data = {
            orderId:orderId,
            orderStatus:"Cancel"
        }
        console.log(data)
        dispatch(supplierRights(data)).then(() => {
            handleClose();
            toast.success('Hủy đơn thành công!!!');
            setTimeout(() => {
                dispatch(orderListForSupplier())
            }, 1000)
        })
    }



    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="title-product">
                Tổng số lượng đơn hàng: {orderList.length}
            </div>
            <div className="list-product">
                <div className="table-product">
                    <div className="header-table">
                        {/*<div className="check-he center"><input type="checkbox"/></div>*/}
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


                        <>
                            <div className="order-list">

                                    <>
                                        {orderList && orderList.map((order) =>(
                                        <div className="main-table">
                                            <div className="col1Table">
                                                {order.orderDetails && order.orderDetails.map((orderDetails) => (
                                                <div className="row1ofCol1Table">
                                                    <div className="imgAndNamePr">
                                                        <img src={orderDetails.product.photo[0]?.photoName} alt="" style={{width: "80px", height: "80px"}}/>
                                                        <div className="nameDetail">
                                                            <Link to={"/supplier/detail/" + orderDetails.product.productID} style={{textDecoration: 'none'}}>
                                                                {orderDetails.product.productName}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="priceProduct">
                                                        {formatToCurrency(orderDetails.price)}
                                                    </div>
                                                    <div className="quantityProduct"> {formatToNumberWithCommas(orderDetails.quantity)}</div>
                                                    <div className="totalProduct">{formatToCurrency(parseInt(orderDetails.price * orderDetails.quantity))}</div>
                                                </div>
                                                ))}
                                                <div className="row2ofCol1Table">
                                                        <div className="noteTotal">Tổng:</div>
                                                        <div className="detailPrice">
                                                            {formatToCurrency(order.totalMoney)}
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="col2Table">
                                                <div className="col1of2Table">
                                                    <div className="timeOrder">{formatLocalDateTime(order.orderDate)}</div>
                                                </div>
                                                <div className="col2of2Table">
                                                    <div className="orderStatus">{checkStatus(order.orderStatus)}</div>
                                                </div>
                                                <div className="col3of2Table">
                                                    <div className="actionDecision">
                                                        {order.orderStatus && order.orderStatus === 'Paid' || order.orderStatus === 'Cancel' ?
                                                            <>
                                                                <Button style={{pointerEvents: 'none', color: 'gray', textDecoration: 'none',cursor: 'not-allowed', borderColor: 'gray'}}
                                                                        onClick={() => supplierPaid(order.orderId)}>Xác nhận</Button>
                                                                <Button style={{pointerEvents: 'none', color: 'gray', textDecoration: 'none',cursor: 'not-allowed', borderColor: 'gray'}}
                                                                        onClick={() => handleOpen(order.orderId)}>Hủy đơn</Button>
                                                            </> :
                                                            <>
                                                                <Button onClick={() => supplierPaid(order.orderId)}>Xác nhận</Button>
                                                                <Button onClick={() => handleOpen(order.orderId)}>Hủy đơn</Button>
                                                            </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>



                                            {/*<div className="orderProperty">*/}
                                            {/*    */}
                                            {/*    */}

                                            {/*    */}
                                            {/*</div>*/}

                                        </div>
                                        ))}
                                    </>
                            </div>
                        </>
                </div>
            </div>

            {/*Hiển thị modal hỏi trước khi xóa*/}
            <Modal
                open={open}
                onClose={handleClose}
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
                    <Button onClick={() => supplierCancel()}>Đồng ý</Button>
                    <Button onClick={handleClose}>Quay lại</Button>
                </Box>
            </Modal>

        </>
    )
}