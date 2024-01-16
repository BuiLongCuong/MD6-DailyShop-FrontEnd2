import "./BodyCustomer.css"
import Carousel from "react-bootstrap/Carousel";
import ShowCategoryProductCustomer from "../ShowCategoryProductCustomer/ShowCategoryProductCustomer";
import ShowAllProductCustomerLayout from "../ShowAllProductCustomer/ShowAllProductCustomerLayout";
export default function BodyCustomer(){
    return(
        <>
            <div className="Body-customer-cover">
                <div className="body-customer-slider-cover">
                    <div className="body-customer">
                        <div className="slider-customer">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        src="https://phuongnam24h.com/img_data/images/top-6-chuong-trinh-khuyen-mai-tet-2023-dat-doanh-thu-khung.jpg"
                                        alt=""/>
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src="https://phuongnam24h.com/img_data/images/chuong-trinh-sale-mua-tet.jpg"
                                        alt=""/>
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        src="https://static-images.vnncdn.net/files/publish/2022/11/21/ha-long-1-510.jpg"
                                        alt=""/>

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="main-body-above-right">
                            <div className="main-body-above-right-a">
                                <img
                                    src="https://down-vn.img.susercontent.com/file/vn-50009109-d74fb5fe87afd27e57ae42eba3a0b7ac"
                                    alt=""/>
                            </div>
                            <div className="main-body-above-right-b">
                                <img
                                    src="https://vietproducer.com/wp-content/uploads/2023/09/quang-cao-pepsi-01-min-1024x640.jpg"
                                    alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
                <ShowCategoryProductCustomer/>
                <ShowAllProductCustomerLayout/>


            </div>
        </>
    )
}