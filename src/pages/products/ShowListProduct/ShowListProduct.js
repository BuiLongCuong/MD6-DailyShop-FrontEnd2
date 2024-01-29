import toast, {Toaster} from "react-hot-toast";
import "./ShowListProduct.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Delete, getAllByIdUser} from "../../../redux/service/productService";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ShowListProduct() {
    const [open, setOpen] = useState(false);
    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"))
    const dispatch = useDispatch();
    const [productId, setProductId] = useState(null);
    const listProducts = useSelector(({products}) => {
        return products.list
    })

    const formatToNumberWithCommas = (value) => {
        return new Intl.NumberFormat('vi-VN').format(value);
    };
    const formatToCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    useEffect(() => {
        dispatch(getAllByIdUser(currentSupplier.id))
    }, []);

    const handleOpen = (id) => {
        setProductId(id)
        setOpen(true);
    };

    const handleClose = () => {
        setProductId(null);
        setOpen(false);
    };

    const deleteProduct = () => {
        dispatch(Delete(productId)).then(() => {
            setOpen(false);
            setProductId(null);
            toast.success('Xóa sản phẩm thành công!');
            dispatch(getAllByIdUser(currentSupplier.id))
        })
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="content-product">
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
                                <div className="name-he center">Tên sản phẩm</div>
                                <div className="cate-he center">Loại sản phẩm</div>
                                <div className="price-he center">
                                    Giá (VNĐ)
                                </div>
                                <div className="quantity-he center"> Kho hàng</div>
                                <div className="action2 center">Thao tác</div>
                            </div>

                            {listProducts && listProducts.map((products) => (
                                <>
                                    <div className="main-table">
                                        <div className="name-he name-ma ma2">
                                            <img
                                                src={products.photo[0]?.photoName}
                                                alt=""/>
                                            <div className="name-p">{products.productName}</div>
                                        </div>
                                        <div className="cate-he ma">{products.category.name}</div>
                                        <div className="price-he ma">
                                            {formatToCurrency(products.price)}
                                        </div>
                                        <div
                                            className="quantity-he ma"> {formatToNumberWithCommas(products.stockQuantity)}</div>
                                        <div className="action2 ma">
                                            <Link className={"edit"} to={"/supplier/edit/" + products.productID}>Chỉnh
                                                sửa</Link>
                                            &nbsp; &nbsp;
                                            <Link className={"detail"} to={"/supplier/detail/" + products.productID}>Xem
                                                chi tiết</Link>
                                            &nbsp; &nbsp;
                                            <Button onClick={() => handleOpen(products.productID)}>Xóa</Button>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/*Hiển thị modal hỏi trước khi xóa*/}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Xóa một sản phẩm khỏi danh sách.
                    </Typography>
                    <Typography id="modal-description" sx={{mt: 2}}>
                        Bạn có chắc chắn muốn xóa sản phẩm này không ???
                    </Typography>
                    <Button onClick={() => deleteProduct()}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </Box>
            </Modal>

        </>
    )
}