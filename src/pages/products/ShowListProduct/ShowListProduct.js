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
                                    <div className="display-content-showListProduct">

                                        {/*<Card style={{width: '18rem'}}>*/}
                                        {/*    {*/}
                                        {/*        listProducts.photo && listProducts.photo.map((photo) => (*/}
                                        {/*            <Card.Img variant="top"*/}
                                        {/*                      src={photo.photoName} alt="" style={{width: "100px"}}/>*/}
                                        {/*        ))*/}
                                        {/*    }*/}

                                        {/*style={{width: '18rem'}*/}
                                        <Card id={"card-image-product"}>
                                            <Card.Img variant="top" src={products.photo[0].photoName} alt="" />
                                            <Card.Body>
                                                <Card.Title>{products.productName}</Card.Title>
                                                <Card.Title>Chủng loại :{products.category.name}</Card.Title>
                                                <Card.Text>Giá sản phẩm :{products.price}</Card.Text>
                                                <Link to={"/supplier/products/detail/" + products.productID}>
                                                    <Button className={"btn-detail-product"} >Chi tiết</Button>
                                                </Link>

                                            </Card.Body>
                                        </Card>
                                    </div>

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