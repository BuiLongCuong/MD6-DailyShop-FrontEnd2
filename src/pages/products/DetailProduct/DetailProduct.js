import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProductById} from "../../../redux/service/productService";

export default function DetailProduct(){
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductById(id))
    }, []);
    const product = useSelector(({products}) => {
        return products.productEdit;
    })



    return(
        <>
            <h2>Thông tin chi tiết về sản phẩm</h2>
            <h3> Tên sản phẩm : {product.productName}</h3>
            <h3>Mô tả : {product.description}</h3>
            <h3>Giá cả : {product.price}</h3>
            <h3>Số lượng trong kho : {product.stockQuantity}</h3>
            {
                product.photo.map((photo) => (
                    <>
                        <img src={photo.photoName} alt="" style={{width: "100px"}}/>
                    </>
                ))
            }
            <Link to={'/supplier/showListProducts'}>
                <button className="back-button" type='button'>Back</button>
            </Link>

        </>
    )
}