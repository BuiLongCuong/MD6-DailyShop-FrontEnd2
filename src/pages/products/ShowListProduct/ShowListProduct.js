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
        console.log(products.list)
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
                <div className="search">
                    A
                </div>
                <div className="products">
                    <div className="nav-bar-product">
                        Nav bar
                    </div>
                    <div className="title-product">
                        Titel
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
                            <div className="main-table">
                                <div className="check-he ma"><input type="checkbox"/></div>
                                <div className="name-he name-ma ma">
                                    <img src="https://icdn.24h.com.vn/upload/3-2023/images/2023-07-09/Than-hinh-muot-muon-muot-cua-gai-xinh-xu-Han-co-trieu-fan-han-kyung-1688907525-217-width1440height1728.jpeg" alt=""/>
                                    <div className="name-p">Quần áo trẻ em</div>
                                </div>
                                <div className="cate-he ma">Quần áo</div>
                                <div className="price-he ma">
                                    100.000
                                </div>
                                <div className="quantity-he ma">1</div>
                                <div className="action ma">Thao tác</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}