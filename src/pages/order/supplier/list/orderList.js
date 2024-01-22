import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {orderListForSupplier} from "../../../../redux/service/oderService";

export default function OrderListForSupplier() {
    const dispatch = useDispatch();
    const orderList = useSelector(({order}) => {
        console.log(order.listOrderForSupplier)
        // return order.listOrderForSupplier;
    })

    useEffect(() => {
        dispatch(orderListForSupplier())
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Tên sản phẩm</td>
                        <td>Đơn giá (VNĐ)</td>
                        <td>Số lượng</td>
                        <td>Tổng giá</td>
                        <td>Trạng thái</td>
                        <td>Thao tác</td>
                    </tr>
                </thead>
            </table>
        </>
    )
}