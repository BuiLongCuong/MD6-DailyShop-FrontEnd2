import Header from "../../../components/Header/Header";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllByCategoryId} from "../../../redux/service/productService";
import "./ShowListProductByCategory.css"
import HeaderCustomer from "../../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
export default function ShowListProductByCategory() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(findAllByCategoryId(id))
    }, [])
    return (
        <>
            <HeaderCustomer/>
            <div className="content-category">
                <div className="body-cate">
                    {
                        productList && productList.map((product) => {
                            return (
                                <>
                                    <Link to={"/customer/products/detail/" + product.productID} className={"text-none"}>
                                        <div className="form-productCate">
                                            <div className="imgCate">
                                                <img src={product.photo[0]?.photoName} alt=""/>
                                            </div>
                                            <div className="card-cate">
                                                <div className="name-cate">
                                                    {
                                                        `${product.productName} , ${product.category.name}`
                                                    }
                                                </div>
                                                <div className="price-cate">
                                                    {
                                                        `Giá : ${product.price} `
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}