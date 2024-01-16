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
            <div className="show-list-product-customer">
                {listProducts && listProducts.map((products) => (
                        <>

                            <div className="card-detail-show-product-cover">
                                <div className="card-detail-show-product">
                                    <div className="card-detail-show-product-image">
                                        <img
                                            src={products.photo[0].photoName}
                                            alt=""/>
                                    </div>
                                    <div className="card-detail-show-product-info">
                                        <div className="card-detail-show-product-name">
                                            {products.category.name}, {products.category.name}
                                        </div>
                                        <div className="card-detail-show-product-blank">

                                        </div>
                                        <div className="card-detail-show-product-price">
                                            $ {products.price}
                                        </div>


                                    </div>
                                </div>
                            </div>


                        </>
                    )
                )}
            </div>




        </>
    )
}