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

            <div className="main-body-showListProduct">
                <div className="content-cover-showListProduct">

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


                </div>
                <div className="pagination">
                    <h4>1,2,3,4</h4>
                </div>

            </div>
        </>
    )
}