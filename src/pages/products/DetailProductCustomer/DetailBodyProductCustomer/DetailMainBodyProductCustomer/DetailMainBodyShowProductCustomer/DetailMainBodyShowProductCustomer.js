import "./DetailMainBodyShowProductCustomer.css"
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../../../../../redux/service/productService";
import {addProductToOrders} from "../../../../../../redux/service/oderService";

export default function DetailMainBodyShowProductCustomer(){
    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();

    const product = useSelector(({products}) => {
        
        return products.productEdit;
    })

    useEffect(() => {
        const fetchData = () => {
            dispatch(getProductById(id)).then(({payload}) => {
                console.log(payload);
                setActiveImg(payload.photo[0]?.photoName)
            });
        }
        fetchData();
    }, []);

    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
    };

    const addOrder = () => {
        let  order = {
            quantity : quantity,
            product : {
                productID: product.productID
            }
        }

        dispatch(addProductToOrders(order)).then(() => {
            alert("Add OK")
        })
    }
    return(
        <>
            <div className="detail-main-body-show-product-customer">
                <div className="card-wrapper-detail-product-customer">
                        <div className="card">

                            <div className="product-imgs">
                                <div className="img-display">
                                    <div className="img-showcase">
                                        <img src={activeImg} alt=" "/>
                                    </div>
                                </div>
                                <div className="img-select">
                                    {product.photo?.map(image => (<div className="img-item">

                                        <img key={image.photoID}
                                             src={image.photoName}
                                             alt="" onClick={() => setActiveImg(image.photoName)}/>

                                    </div>))}
                                </div>
                            </div>

                            <div className="product-content">
                                <h3 className="product-title">Chi tiết sản phẩm
                                </h3>
                                <a href="#" className="product-link">{product?.productName}</a>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>4.7(21)</span>
                                </div>

                                <div className="product-price">
                                    {/*<p className="last-price">Old Price: <span>$257.00</span></p>*/}
                                    <p className="new-price">Giá: <span>${product?.price}</span></p>
                                </div>

                                <div className="product-detail">
                                    <h2>Mô tả sản phẩm: </h2>
                                    <p> {product?.description}</p>

                                    <ul>
                                        <li>Màu sắc: <span>Đa dạng</span></li>
                                        <li>Trạng thái: <span>Có sẵn</span></li>
                                        <li>Phân loại: <span>{product?.category?.name}</span></li>
                                        <li>Khu vực vận chuyển: <span>Toàn quốc</span></li>
                                        <li>Phí vận chuyển: <span>Đặt hàng đi rồi biết</span></li>
                                    </ul>
                                </div>

                                <div className="purchase-info-cover">
                                    <input type="number"
                                           value={quantity}
                                           min="1"
                                           onChange={handleQuantityChange}
                                           placeholder={"Nhập số lượng"}/>
                                    <div className="number-add-buy">
                                        <Link to={"#"}>
                                            <button type="button" className="btn" onClick={addOrder}>
                                                <i className="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                                            </button>
                                        </Link>
                                        <Link to={"#"}>
                                            <button type="button" className="btn">Mua ngay</button>
                                        </Link>
                                    </div>

                                </div>

                                <div className="social-links">
                                    <p>Share At: </p>
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </>
    )
}