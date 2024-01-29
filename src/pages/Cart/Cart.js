import HeaderSupplier from "../Homes/HomeSupplier/HeaderSupplier/HeaderSupplier";
import "./Cart.css"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    countCartDetails, decreasingQuantityCart, increasingQuantityCart,
    removeProductInOrder,
    showOrderList, updateQuantityCart,
} from "../../redux/service/oderService";
import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import {Link} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import * as React from "react";


export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(({order}) => {
        console.log(order.cart)
        return order.cart;
    });

    const handleIncreasing = (orderCart) => {
        let newQuantity = +orderCart.quantity;
        newQuantity++;
        let obj = {...orderCart, quantity: newQuantity};
        dispatch(increasingQuantityCart(obj));
    };

    const handleDecreasing = async (orderCart) => {
        try {
             let newQuantity = +orderCart.quantity;
            newQuantity= Math.max(1, newQuantity - 1);
            let obj = {...orderCart, quantity: newQuantity};
            await dispatch(decreasingQuantityCart(obj));
        }catch (e) {
            toast.error(e.message)
        }
    };


    const deleteProductInCart = (id) => {
        dispatch(removeProductInOrder(id)).then(() =>{
            console.log("Xóa sản phẩm thành công");
            dispatch(showOrderList())
            dispatch(countCartDetails())
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

    const resetCard = () => {
        dispatch(countCartDetails())
    }

    return (
        <>
            <HeaderCustomer/>
            <>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
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
                                            {console.log(itemDetails)}
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
                                                    <button className={"btn1"} onClick={() => handleDecreasing(itemDetails)}>-</button>
                                                    <input type="text" value={+itemDetails.quantity} />
                                                    <button className={"btn2"} onClick={() => handleIncreasing(itemDetails)}>+</button>
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
                                            <button onClick={() => resetCard()} >Tiến hành thanh toán</button>
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