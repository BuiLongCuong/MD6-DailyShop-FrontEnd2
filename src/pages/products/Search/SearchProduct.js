import "./SearchProduct.css"
import HeaderCustomer from "../../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {search, searchDecresePrice, searchIncresePrice} from "../../../redux/service/productService";
import {useEffect} from "react";
import {Field, Form, Formik} from "formik";

export default function SearchProduct() {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();

    const formatToCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(value);
    };

    useEffect(() => {
        const searchContent = {

            nameSearch: searchParams.get("name"),
            minPrice: searchParams.get("minPrice"),
            maxPrice: searchParams.get("maxPrice")

        }
        dispatch(search(searchContent))
    }, [searchParams]);


    const searchByPrice = (value) => {
        let searchString = `name=${searchParams.get('name')}`;
        if (value.minPrice) searchString += `&minPrice=${value.minPrice}`
        if (value.maxPrice) searchString += `&maxPrice=${value.maxPrice}`
        navigate(`/customer/products/search?${searchString}`)

    }


    const listSearch = useSelector(({products}) => {
        return products.list;
    })

    const searchFill=(e)=>{
        let fill= +e.target.value;
        if (fill===1){
            dispatch(searchIncresePrice(searchParams.get('name')))
        }else if(fill===2){
            dispatch(searchDecresePrice(searchParams.get('name')))
        }else {

        }
    }

    return (
        <>
            <HeaderCustomer/>
            <div className="body-search">
                <div className="search-ads">
                    <div className="search-ads-above">
                        <div className="search-ads-above-left">
                            <img
                                src="https://e7.pngegg.com/pngimages/979/932/png-clipart-hot-promotion-text-orange-thumbnail.png"
                                alt=""/>
                        </div>
                        <div className="search-ads-above-right">
                            #Nhanh tay mua sắm,nhận ngay nhiều phần quà hấp dẫn - Còn chờ gì nữa . Mua ngay!
                        </div>
                    </div>
                    <div className="search-ads-bottom">
                        <img src="https://intphcm.com/data/upload/banner-tet-li-xi.jpg" alt=""/>
                    </div>
                </div>
                <div className="search-content-display">
                    <div className="search-content-name">
                        Kết quả tìm kiếm cho từ khóa <span style={{color: "red"}}>"{searchParams.get("name")} "</span>
                    </div>
                    <div className="search-content-select">
                        <div className="search-content-arrange">
                            Sắp xếp theo
                        </div>
                        <div className="search-content-sort-by">
                            <div className="search-content-sort-by-latest">
                                <Link to={"#"}>Mới nhất</Link>
                            </div>
                            <div className="search-content-sort-by-latest">
                                <Link to={"#"}>Bán chạy</Link>
                            </div>
                            <div className="search-content-sort-by-price">
                                <select name="" id="fill" onChange={(e)=>{
                                    searchFill(e)
                                }}>
                                    <option  value="">Giá </option>
                                    <option className={"option-display"}  value={'1'}>Giá : từ thấp đến cao</option>
                                    <option className={"option-display"} value={'2'}>Giá : từ cao đến thấp</option>
                                </select>
                            </div>
                            <div className="search-content-sort-price-range">
                                Khoảng giá
                                <Formik
                                    initialValues={{
                                        minPrice: "",
                                        maxPrice: ""
                                    }}
                                    onSubmit={searchByPrice}
                                >
                                    <Form>
                                        <Field className="sort-price-range" name={"minPrice"}
                                               placeholder={"Từ"}></Field>
                                        <Field className="sort-price-range" name={"maxPrice"}
                                               placeholder={"Đến"}></Field>
                                        <button className="sort-price-range-apply" type={"submit"} style={{color:"white"}}>Áp dụng</button>
                                    </Form>

                                </Formik>

                            </div>

                        </div>

                    </div>
                    <div className="search-content-show">
                        {listSearch && listSearch.map((products) =>
                            <>
                                <Link to={"/customer/products/detail/" + products.productID}
                                      className="card-detail-show-product-cover-without-login">
                                    <div className="card-detail-show-product-without-login">
                                        <div className="card-detail-show-product-image-without-login">
                                            <img
                                                src={products.photo.length > 0 ? products.photo[0].photoName : ""}
                                                alt=""/>
                                        </div>
                                        <div className="card-detail-show-product-info-without-login">
                                            <div className="card-detail-show-product-name-without-login">
                                                Tên sản phẩm:{products.productName}
                                            </div>
                                            <div className="card-detail-show-product-blank-without-login">
                                                Loại: {products.category.name}
                                            </div>
                                            <div className="card-detail-show-product-price-without-login">
                                                <span style={{color: "red"}}>Giá : {formatToCurrency(products.price)}</span>
                                            </div>


                                        </div>
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}