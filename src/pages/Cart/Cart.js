import HeaderSupplier from "../Homes/HomeSupplier/HeaderSupplier/HeaderSupplier";
import "./Cart.css"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeProductInOrder, showOrderList, updateQuantity, updateTotalAmount} from "../../redux/service/oderService";
import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import {Link, useParams} from "react-router-dom";
import {getProductById} from "../../redux/service/productService";

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(({order}) => {
        // console.log(order.listOrder)
        // console.log(order)
        return order.cart;
    });

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = (productId, price) => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        dispatch(updateQuantity(productId, quantity + 1));
        dispatch(updateTotalAmount(price * (quantity + 1))); // Thêm hành động cập nhật tổng tiền
    };

    const handleDecrease = (productId, price) => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            dispatch(updateQuantity(productId, quantity - 1));
            dispatch(updateTotalAmount(price * (quantity - 1))); // Thêm hành động cập nhật tổng tiền
        }
    };

    const deleteProductInCart = (id) => {
        dispatch(removeProductInOrder(id)).then(() =>{
            console.log("Xóa sản phẩm thành công");
            dispatch(showOrderList())
        })
    }

    const formatToCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    useEffect(() => {
        dispatch(showOrderList())
    }, []);


    return (
        <>
            <HeaderCustomer/>
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
                                    cart && cart.cartDetails && cart.cartDetails.map((itemDetails) => (
                                        <>
                                            <div className="orderDetail">
                                                <div className="removeOrder" onClick={()=>deleteProductInCart(itemDetails.id)}>Xóa</div>
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
                                                        {formatToCurrency(itemDetails.product.price)}
                                                    </div>

                                                </div>
                                                <div className="quantityPr">
                                                    <button className={"btn1"} onClick={() => handleDecrease(itemDetails.product.productID, itemDetails.product.price)}>-</button>
                                                    <input type="text" value={itemDetails.quantity} readOnly />
                                                    <button className={"btn2"} onClick={() => handleIncrease(itemDetails.product.productID, itemDetails.product.price)}>+</button>
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
                                            {formatToCurrency(cart && cart.totalAmount)}
                                        </div>
                                    </div>
                                }
                                <div className="row2OfCol2">
                                    <div className="decisionBtn">
                                        <Link to={"/pay"}>
                                            <button>Tiến hành thanh toán</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="row3OfCol2">
                                    <div className="linkBack">
                                        <Link className={"backShop"} to={"/customer"}>
                                        <p><i className="fa fa-arrow-left "></i>&nbsp;Tiếp mục mua hàng</p>
                                        </Link>
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