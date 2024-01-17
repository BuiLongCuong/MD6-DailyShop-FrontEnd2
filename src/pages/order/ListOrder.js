import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {showOrderList} from "../../redux/service/orderService";
import {Link} from "react-router-dom";

export default function ListOrder() {
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const cart = useSelector(({order}) => {
        // console.log(order.listOrder)
        return order.cart;
    });
    useEffect(() => {
        dispatch(showOrderList())
    }, []);
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Photo</th>
                    <th>Product name</th>
                    <th>Price/product</th>
                    <th>Quantity</th>
                    <th>Total amount</th>
                </tr>
                </thead>
                <tbody>
                {

                    cart && cart.orderDetails && cart.orderDetails.map((itemDetails) => (

                        <tr key={itemDetails.id}>
                             <td>
                                <img src={itemDetails.product.photo[0]?.photoName} alt="" style={{width: "100px"}}/>
                            </td>

                            <td>{itemDetails.product.productName}</td>
                            <td>{itemDetails.product.price}</td>
                            <td>{itemDetails.quantity}</td>
                            <td>{cart.totalAmount}</td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    );
}