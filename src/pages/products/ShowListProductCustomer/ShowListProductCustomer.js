import "./ShowListProductCustomer.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {getAllProduct} from "../../../redux/service/productService";
export default function ShowListProductCustomer(){
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAllProduct(currentCustomer.id))
    }, []);
    return(
        <>

            <div className="show-list-product-customer">
                <div className="card-detail-show-product-cover">
                    <div className="card-detail-show-product">
                        <div className="card-detail-show-product-image">
                            <img src="https://cdn.tgdd.vn/Files/2017/05/23/985304/nhung-cong-dung-tuyet-voi-cua-thanh-long-ban-nen-biet-202109171157393465.jpg" alt=""/>
                        </div>
                        <div className="card-detail-show-product-info">
                            <div className="card-detail-show-product-name"></div>
                            <div className="card-detail-show-product-blank"></div>
                            <div className="card-detail-show-product-price">
                        </div>


                        </div>
                    </div>
                </div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>
                <div className="card-detail-show-product-cover"></div>

                {/*{listProducts && listProducts.map((products) => (*/}
                {/*        <> */}
                {/*            <Link to={"#"}>*/}
                {/*            <div className="card-detail-show-product">*/}
                {/*                <div className="card-detail-show-product-image">*/}
                {/*                    <img*/}
                {/*                        src={products.photo[0].photoName}*/}
                {/*                        alt=""/>*/}
                {/*                </div>*/}
                {/*                <div className="card-detail-show-product-name">*/}
                {/*                    {products.category.name}*/}
                {/*                </div>*/}
                {/*                <div className="card-detail-show-product-price">*/}
                {/*                    $ {products.price}*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </Link>*/}
                {/*        </>*/}
                {/*    )*/}
                {/*)}*/}

            </div>
        </>
    )
}