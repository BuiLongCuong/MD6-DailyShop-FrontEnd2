import "./ShowListProduct.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllByIdUser} from "../../../redux/service/productService";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
export default function ShowListProduct(){
    const currentCustomer = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.list)
        return products.list
    })
    useEffect(() => {
        dispatch(getAllByIdUser(currentCustomer.id))
    }, []);

    return(
        <>

            <div className="main-body-showListProduct">
                <div className="content-cover-showListProduct">
                    {/*{*/}
                    {/*    listProducts.map((products) =>(*/}
                    {/*            <>*/}
                    {/*                <div className="display-content-showListProduct">*/}
                    {/*                    <Card style={{width: '18rem'}}>*/}
                    {/*                        {*/}
                    {/*                            listProducts.photo.map((photo) =>(*/}
                    {/*                                <Card.Img variant="top"*/}
                    {/*                                          src={photo.photoName} alt="" style={{width: "100px"}}/>*/}
                    {/*                            ))*/}
                    {/*                        }*/}

                    {/*                        <Card.Body>*/}
                    {/*                            <Card.Title>{products.productName}</Card.Title>*/}
                    {/*                            <Card.Text>{products.price}</Card.Text>*/}
                    {/*                            <Link to={"/supplier/products/detail/" + products.productID}>*/}
                    {/*                                <Button >Chi tiết</Button>*/}
                    {/*                            </Link>*/}

                    {/*                        </Card.Body>*/}
                    {/*                    </Card>*/}
                    {/*                </div>*/}

                    {/*            </>*/}
                    {/*        )*/}
                    {/*    )*/}
                    {/*}*/}


                </div>
                <div className="pagination">
                    <h4>1,2,3,4</h4>
                </div>

            </div>
        </>
    )
}