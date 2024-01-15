import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {Delete, getAllByIdUser} from "../../../redux/service/productService";


export default function ListProduct() {
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAllByIdUser(currentCustomer.id))
    }, []);
    const remove = (id) => {
        const userConfirmed = window.confirm('Are you sure you want to delete?');
        if (userConfirmed){
            dispatch(Delete(id)).then(() => {
                dispatch(getAllByIdUser(currentCustomer.id))
            })
        }
    }
    return (
        <>
            <table className="table table-sm">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>StockQuantity</th>
                    <th>Category</th>
                    <th>Ảnh</th>
                    <th colSpan={2}>Action</th>
                </tr>
                {
                    listProducts && listProducts.map((products) =>
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

                                        {products.photo && products.photo.length > 0 && (
                                            <img src={products.photo[0].photoName} alt=""
                                                 style={{width: "100px"}}/>
                                        )}
                                    </td>
                                    <td>
                                        <Link to={"/edit/" + products.productID}>
                                            <button>Sửa</button>
                                        </Link>
                                    </td>
                                    <td >
                                        <button onClick={() => {
                                            remove(products.productID)
                                        }}>Xóa</button>
                                    </td>
                                </tr>
                            </>
                        ))
                }
            </table>
        </>
    )
}

