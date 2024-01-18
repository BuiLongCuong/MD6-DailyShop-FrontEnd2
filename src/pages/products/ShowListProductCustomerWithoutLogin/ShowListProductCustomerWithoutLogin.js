import "./ShowListProductCustomerWithoutLogin.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllProduct, getAllProductWithoutLogin} from "../../../redux/service/productService";
import {Link} from "react-router-dom";
export default function ShowListProductCustomerWithoutLogin(){
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAllProductWithoutLogin())
    }, []);
    return(
        <>
            <div className="show-list-product-customer-without-login">
                {listProducts && listProducts.map((products) => (
                        <>
                            {/*<Link to={"/customer/products/detail/" + products.productID}>*/}
                                <Link to={"/customer/products/detail/" + products.productID} className="card-detail-show-product-cover-without-login">
                                    <div className="card-detail-show-product-without-login">
                                        <div className="card-detail-show-product-image-without-login">
                                            <img
                                                src={products.photo[0]?.photoName}
                                                alt=""/>
                                        </div>
                                        <div className="card-detail-show-product-info-without-login">
                                            <div className="card-detail-show-product-name-without-login">
                                                {products.productName}, {products.category.name}
                                            </div>
                                            <div className="card-detail-show-product-blank-without-login">

                                            </div>
                                            <div className="card-detail-show-product-price-without-login">
                                                <span style={{color: "red"}}>Giá : $ {products.price}</span>
                                            </div>


                                        </div>
                                    </div>
                                </Link>
                            {/*</Link>*/}


                        </>
                    )
                )}
            </div>


        </>
    )
}