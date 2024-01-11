import "./MainBodyAbove.css"
import Carousel from "react-bootstrap/Carousel";
export default function MainBodyAbove(){
    return(
        <>
            <div className="main-body-above">
                <div className="slider">
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                src="https://img.lazcdn.com/g/ff/kf/S37b1d4e85fcd4862a73b078de1038f0c8.jpg_720x720q80.jpg_.webp"
                                alt=""/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src="https://img.lazcdn.com/g/ff/kf/S4036a649afc040deb58a1d3078b0145bH.jpg_2200x2200q80.jpg_.webp"
                                alt=""/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="https://down-vn.img.susercontent.com/file/50d3c70b379f6d0743ed1321c3c7174a"
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
        </>
    )
}