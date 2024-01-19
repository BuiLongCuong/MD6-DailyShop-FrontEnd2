import "./ShowListProductCustomerWithoutLogin.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllProduct, getAllProductWithoutLogin} from "../../../redux/service/productService";
import {Link, useParams, useSearchParams} from "react-router-dom";
import {forEach} from "react-bootstrap/ElementChildren";
import {Pagination} from "./pagination/Pagination";
import {current} from "@reduxjs/toolkit";

export default function ShowListProductCustomerWithoutLogin() {
    const dispatch = useDispatch();

    const [searchParam] = useSearchParams()
    const [page, setPage] = useState(+searchParam.get('page'))

    const changePage = (newPage) => {
        setPage(newPage)
    }

    const listProducts = useSelector(({products}) => {
        return products.list
    })
    const totalPages = useSelector(({products}) => {
        return products.totalPages;
    })
    useEffect(() => {
        dispatch(getAllProductWithoutLogin(page))
    }, [page]);
    return (
        <>
            <div className="show-list-product-customer-without-login">
                {listProducts && listProducts.map((products) => (
                        <>
                            {/*<Link to={"/customer/products/detail/" + products.productID}>*/}
                            <Link to={"/customer/products/detail/" + products.productID}
                                  className="card-detail-show-product-cover-without-login">
                                <div className="card-detail-show-product-without-login">
                                    <div className="card-detail-show-product-image-without-login">
                                        <img
                                            src={products.photo.length > 0 ? products.photo[0].photoName : ""}
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
                {page || totalPages ? <Pagination total={totalPages} current={page} changePage={changePage}/> : ""}
            </div>


        </>
    )
}