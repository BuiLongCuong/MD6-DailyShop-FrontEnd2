import "./MainBodyAboveSupplier.css"
import Carousel from "react-bootstrap/Carousel";
export default function MainBodyAboveSupplier(){
    return(
        <>
            <div className="main-body-above">
                <div className="slider">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                src="https://afamilycdn.com/2017/samtet-3-1484620559049.jpg"
                                alt=""/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="https://vuanem.com/blog/wp-content/uploads/2021/12/mua-sam-tet.jpg"
                                alt=""/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://mamamy.vn/source/data/post/de3c1a733c9c51de130bc7ae775fd930/mamamy.vn-thumbnail-hoat-dong-ngay-tet-cho-ca-gia-dinh-detail-2.jpg"
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
                            src="https://mamamy.vn/source/data/post/de3c1a733c9c51de130bc7ae775fd930/mamamy.vn-thumbnail-hoat-dong-ngay-tet-cho-ca-gia-dinh-detail-6.jpg"
                            alt=""/>
                    </div>
                </div>
            </div>

        </>
    )
}