import "./MainBodyAboveDetailProductSupplier.css"
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductById} from "../../../../../redux/service/productService";

export default function MainBodyAboveDetailProductSupplier() {
    const [activeImg, setActiveImg] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();

    const product = useSelector(({products}) => {
        return products.productEdit;
    })

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getProductById(id)).unwrap();
            setActiveImg(product.photo[0].photoName)
        }
        fetchData();


    }, []);

    return (
        <>
            <div className="main-body-above-detail-product-supplier">
                <div className="card-wrapper-detail-product-supplier">
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
                                <p className="new-price">Price: <span>${product?.price}</span></p>
                            </div>

                            <div className="product-detail">
                                <h2>Mô tả sản phẩm: </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora
                                    fuga
                                    tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at
                                    sequi ipsa!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis
                                    eius.
                                    Dignissimos, labore suscipit. Unde.</p>
                                <ul>
                                    <li>Color: <span>Đa dạng</span></li>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>{product?.category?.name}</span></li>
                                    <li>Shipping Area: <span>Toàn quốc</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                </ul>
                            </div>

                            <div className="purchase-info">
                                {/*<input type="number" min="0" value="1"/>*/}
                                <h5>Số lượng hàng trong kho:{product?.stockQuantity}</h5>
                                <Link to={"supplier"}>
                                    <button type="button" className="btn">
                                        Trang chủ
                                    </button>
                                </Link>
                                <Link to={"/edit/" + products.productID}>
                                    <button type="button" className="btn">Chinh sua</button>
                                </Link>
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