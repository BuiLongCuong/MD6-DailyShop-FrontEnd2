import "./SearchProductByPrice.css"
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {search} from "../../../../redux/service/productService";
export default function SearchProductByPrice(){
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(() => {
        const searchContents = {

            nameSearch: searchParams.get("name"),
            category: searchParams.get("category"),
            minPrice: searchParams.get("minPrice"),
            maxPrice: searchParams.get("maxPrice"),

        }
        dispatch(search(searchContents))
    }, [searchParams]);
    const listSearch = useSelector(({products}) => {
        return products.list;
    })
    return(
        <>
            <div className="search-content-show">
                {listSearch && listSearch.map((products) =>
                    <>
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
                                        Tên sản phẩm:{products.productName}
                                    </div>
                                    <div className="card-detail-show-product-blank-without-login">
                                        Loại: {products.category.name}
                                    </div>
                                    <div className="card-detail-show-product-price-without-login">
                                        <span style={{color: "red"}}>Giá : {(products.price)}</span>
                                    </div>


                                </div>
                            </div>
                        </Link>
                    </>
                )}
            </div>

        </>
    )
}