import "./ShowListProduct.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllByIdUser} from "../../../redux/service/productService";
import Card from "react-bootstrap/Card";

import * as React from 'react';
import {Link} from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import {DataGrid} from "@mui/x-data-grid";
// import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ShowListProduct() {
    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const listProducts = useSelector(({products}) => {
        console.log(products.listByAccountId)
        return products.listByAccountId
    })
    useEffect(() => {
        dispatch(getAllByIdUser(currentSupplier.id))
    }, []);

    return (
        <>
            {/*{*/}
            {/*    listProducts && listProducts.map((products) => (*/}
            {/*            <>*/}
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

            {/*            </>*/}
            {/*        )*/}
            {/*    )*/}
            {/*}*/}



                        <div className="content-product">
                            <div className="search">
                                A
                            </div>
                            <div className="products">
                                <div className="nav-bar-product">
                                    <Link to={"/add"}>
                                        <button className={"add-product-supplier"}>
                                            + Thêm mới sản phẩm
                                        </button>
                                    </Link>
                                </div>
                                <div className="title-product">
                                    1 sản phẩm
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
                                                        <Link to={"/edit/" + products.productID}>Chỉnh sửa </Link>
                                                        &nbsp; &nbsp;
                                                        <Link to={"/supplier/products/detail/" + products.productID}>Xem
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



            {/*<DataGrid*/}
            {/*    rows={listProducts && listProducts.map(item => (*/}
            {/*        {*/}
            {/*            productID: item.productID,*/}
            {/*            // photo:*/}
            {/*            //     (*/}
            {/*            //         item.photo && item.photo.length > 0 && <img src={item.photo[0].photoName} alt="" style={{width: "100px"}}/>*/}
            {/*            //     ),*/}
            {/*            productName: item.productName,*/}
            {/*            price: item.price,*/}
            {/*            stockQuantity: item.stockQuantity,*/}
            {/*            category: item.category.name,*/}


            {/*        }*/}
            {/*    ))}*/}
            {/*    columns={[*/}
            {/*        { field: 'productID', headerName: '#', width: 200 },*/}
            {/*        // { field: 'photo',*/}
            {/*        //     headerName: 'Photo',*/}
            {/*        //     width: 130,*/}
            {/*        // },*/}
            {/*        { field: 'productName', headerName: 'Name', width: 200 },*/}
            {/*        { field: 'price', headerName: 'Price', width: 170 },*/}
            {/*        {*/}
            {/*            field: 'stockQuantity',*/}
            {/*            headerName: 'Stock quantity',*/}
            {/*            // type: 'number',*/}
            {/*            width: 150,*/}
            {/*        },*/}
            {/*        { field: 'category', headerName: 'Category', width: 130 },*/}

            {/*        {*/}
            {/*            field: 'action',*/}
            {/*            headerName: 'Action',*/}
            {/*            headerAlign: 'center',*/}
            {/*            width: 200,*/}
            {/*            align: 'center',*/}
            {/*            renderCell: (params) => {*/}
            {/*                return (*/}
            {/*                    <>*/}
            {/*                        /!*{listProducts && listProducts.map(item1 => (*!/*/}

            {/*                        /!*)}*!/*/}
            {/*                        <Button aria-label="edit">*/}
            {/*                            /!*<Link to={`/edit/${params.row.id}`}>*!/*/}
            {/*                                <EditIcon color="action" />*/}
            {/*                            /!*</Link>*!/*/}
            {/*                        </Button>*/}
            {/*                        <Button aria-label="delete"><DeleteIcon color="action" /></Button>*/}
            {/*                        <Button aria-label="view">*/}
            {/*                            /!*<Link to={`/edit/${params.row.id}`}>*!/*/}
            {/*                                <VisibilityIcon color="action" />*/}
            {/*                            /!*</Link>*!/*/}
            {/*                        </Button>*/}
            {/*                    </>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*    initialState={{*/}
            {/*        pagination: {*/}
            {/*            paginationModel: { page: 0, pageSize: 5 },*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    pageSizeOptions={[5, 10]}*/}
            {/*    checkboxSelection*/}
            {/*/>*/}


        </>
    );
}