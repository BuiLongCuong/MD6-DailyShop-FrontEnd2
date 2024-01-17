import "./ShowListProduct.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllByIdUser} from "../../../redux/service/productService";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export default function ShowListProduct() {
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        return products.list
    })
    useEffect(() => {
        dispatch(getAllByIdUser(currentCustomer.id))
    }, []);

    return (
        <>
            {
                listProducts && listProducts.map((products) => (
                        <>
                            {/*/!*<div className="display-content-showListProduct">*!/*/}
                            {/*/!*    <div className="card-image-product">*!/*/}
                            {/*        <Card >*/}
                            {/*            /!*<div className="card-show-image-product">*!/*/}
                            {/*                <Card.Img  variant="top" src={products.photo[0].photoName} style={{width:" 100px", height: "100px"}}  alt="" />*/}
                            {/*            /!*</div>*!/*/}
                            {/*            /!*<div className="Card-body-show-info-product">*!/*/}
                            {/*                <Card.Body>*/}
                            {/*                    /!*<div className="card-product-productName">*!/*/}
                            {/*                        <Card.Title>{products.productName}</Card.Title>*/}
                            {/*                    /!*</div>*!/*/}
                            {/*                    /!*<div className="card-product-category-name">*!/*/}
                            {/*                        <Card.Title>Chủng loại :{products.category.name}</Card.Title>*/}
                            {/*                    /!*</div>*!/*/}
                            {/*                      /!*<div className="card-product-show-price">*!/*/}
                            {/*                          <Card.Text>Giá sản phẩm :{products.price}</Card.Text>*/}
                            {/*                      /!*</div>*!/*/}
                            {/*                    /!*<div className="card-product-show-button">*!/*/}
                            {/*                        <Link to={"/supplier/products/detail/" + products.productID}>*/}
                            {/*                            <Button className={"btn-detail-product"} >Chi tiết</Button>*/}
                            {/*                        </Link>*/}
                            {/*                        <Link to={"#"}>*/}
                            {/*                            <Button className={"btn-delete-product"} >Xóa</Button>*/}
                            {/*                        </Link>*/}
                            {/*                    /!*</div>*!/*/}

                            {/*                </Card.Body>*/}
                            {/*            /!*</div>*!/*/}

                            {/*        </Card>*/}
                            {/*    /!*</div>*!/*/}
                            {/*</div>*/}

                        </>
                    )
                )
            }



                        <div className="content-product">
                            <div className="searchManyInput">
                                <div className="searchManyInput">

                                </div>
                                <div className="inputSearch">
                                    <input type="text"/>
                                </div>
                                <div className="iconSearch">
                                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>

                            <div className="products">
                                <div className="nav-bar-product">
                                    <Link to={"/supplier/add"}>
                                        <button className={"add-product-supplier"}>
                                            + Thêm mới sản phẩm
                                        </button>
                                    </Link>
                                </div>
                                <div className="title-product">
                                    Tất cả các sản phẩm: {listProducts.length}
                                </div>
                                <div className="list-product">
                                    <div className="table-product">
                                        <div className="header-table">
                                            <div className="check-he center"><input type="checkbox"/></div>
                                            <div className="name-he center">Tên sản phẩm</div>
                                            <div className="cate-he center">Loại sản phẩm</div>
                                            <div className="price-he center">
                                                Giá
                                            </div>
                                            <div className="quantity-he center"> Kho hàng</div>
                                            <div className="action center">Thao tác</div>
                                        </div>

                                        {listProducts && listProducts.map((products) =>(
                                            <>
                                                <div className="main-table">
                                                    <div className="check-he ma"><input type="checkbox"/></div>
                                                    <div className="name-he name-ma ma">
                                                        <img
                                                            src={products.photo[0].photoName}
                                                            alt=""/>
                                                        <div className="name-p">{products.productName}</div>
                                                    </div>
                                                    <div className="cate-he ma">{products.category.name}</div>
                                                    <div className="price-he ma">
                                                        $ {products.price}
                                                    </div>
                                                    <div className="quantity-he ma">{products.stockQuantity}</div>
                                                    <div className="action ma">
                                                        <Link to={"/supplier/edit/" + products.productID}>Chỉnh sửa </Link>
                                                        &nbsp; &nbsp;
                                                        <Link to={"/supplier/detail/" + products.productID}>Xem
                                                            chi tiết</Link>
                                                        &nbsp; &nbsp;
                                                        <Link to={"/edit/" + products.productID}>Xóa</Link>
                                                    </div>
                                                </div>
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>


        </>
    )
}