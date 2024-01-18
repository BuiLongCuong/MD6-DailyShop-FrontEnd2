import HeaderSupplier from "../Homes/HomeSupplier/HeaderSupplier/HeaderSupplier";
import "./Cart.css"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {showOrderList} from "../../redux/service/oderService";

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(({order}) => {
        console.log(order.listOrder)
        console.log(order)
        return order.cart;
    });
    useEffect(() => {
        dispatch(showOrderList())
    }, []);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <>
            <HeaderSupplier/>
            <>
                <div className="mainWindow">
                    <div className="bodyWindow">
                        <div className="nameBody1">
                            <div className="titleBody1">
                                Giỏ hàng
                            </div>
                        </div>
                        <div className="nameBody2">
                            <div className="col1Body">
                                {
                                    cart && cart.orderDetails && cart.orderDetails.map((itemDetails) => (
                                        <>
                                            <div className="orderDetail">
                                                <div className="removeOrder">Xóa</div>
                                                <div className="imageOrder"><img
                                                    src={itemDetails.product.photo[0]?.photoName} alt=""
                                                    style={{width: "96px", height: "69px"}}/></div>
                                                <div className="infoOrder">
                                                    <div className="infoPr">
                                                        <div className="namePr">{itemDetails.product.productName}</div>
                                                        <div
                                                            className="categoryPro"> Loại: {itemDetails.product.category.name}</div>
                                                    </div>
                                                    <div className="pricePr">
                                                        {itemDetails.product.price} VNĐ
                                                    </div>

                                                </div>
                                                <div className="quantityPr">
                                                    <button className={"btn1"} onClick={handleDecrease}>-</button>
                                                    <input type="text" value={quantity} readOnly/>
                                                    <button className={"btn2"} onClick={handleIncrease}>+</button>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                            <div className="col2Body">
                                {
                                    <div className="row1OfCol2">
                                        <div className="paymentTittle">
                                            Tổng tiền:
                                        </div>
                                        <div className="paymentTotal">
                                            {cart && cart.totalAmount} VNĐ
                                        </div>
                                    </div>
                                }
                                <div className="row2OfCol2">
                                    <div className="decisionBtn">
                                        <button>Tiến hành thanh toán</button>
                                    </div>
                                </div>
                                <div className="row3OfCol2">
                                    <div className="linkBack">
                                        <p><i class="fa fa-arrow-left "></i>&nbsp;Tiếp mục mua hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}