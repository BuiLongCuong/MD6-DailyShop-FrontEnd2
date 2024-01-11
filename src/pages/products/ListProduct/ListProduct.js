import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {getAllByIdUser} from "../../../redux/service/productService";


export default function ListProduct() {
    const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAllByIdUser(currentCustomer.id))
    }, []);
    return (
        <>
            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>StockQuantity</th>
                    <th>Category</th>
                    <th>Ảnh</th>
                    <th>Action</th>
                </tr>
                {
                    listProducts.map((products) =>
                        (
                            <>
                                <tr>
                                    <td>{products.productID}</td>
                                    <td>{products.productName}</td>
                                    <td>{products.description}</td>
                                    <td>{products.price}</td>
                                    <td>{products.stockQuantity}</td>
                                    <td>{products.category.name}</td>
                                    <td>
                                        {
                                            products.photo.map((photo) => (
                                                <>
                                                    <img src={photo.photoName} alt="" style={{width: "100px"}}/>
                                                </>
                                            ))
                                        }
                                    </td>
                                    <td>
                                        <Link to={"/edit/" + products.productID}>
                                            <button>Sửa</button>
                                        </Link>
                                    </td>
                                    <td>Xóa</td>
                                </tr>
                            </>
                        ))
                }
            </table>
        </>
    )
}