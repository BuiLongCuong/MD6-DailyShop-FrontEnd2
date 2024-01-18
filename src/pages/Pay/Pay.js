import "./Pay.css";
import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import {Link} from "react-router-dom";

export default function Pay() {
    return (
        <>
            <HeaderCustomer/>
            <div className="content-pay">
                <div className="body-pay">
                    <div className="address-pay">
                        <div className="address-product">
                            <div className="ship"><i className="fa-solid fa-location-dot" style={{
                                color: "#e01f1f"
                            }}></i>
                                <span className={"adr"}>Địa Chỉ Nhận Hàng</span>
                            </div>
                        </div>
                        <div className="name-payPr">
                            <div className="name-cus">
                                Pham Van Hong (0349896807)
                            </div>
                            <div className="address-cus">
                                Thôn Dương Cốc Đồng Quang, Xã Đồng Quang, Huyện Quốc Oai, Hà Nội
                            </div>
                            <div className="edit-cus">
                                <Link to={"#"}>Thay Đổi</Link>
                            </div>
                        </div>
                    </div>
                    <div className="pay">
                        <div className="form-prCus">
                            <div className="header-pr">
                                <div className="body-header">
                                    <div className="sp">Sản Phẩm</div>
                                    <div className="pr">Đơn Giá</div>
                                    <div className="Qt">Số Lượng</div>
                                    <div className="sumPr">Tổng Tiền</div>
                                </div>
                            </div>
                            <div className="PO">
                                <div className="name">
                                    <div className="iconShop">
                                        <i className="fa-solid fa-shop"></i>
                                    </div>
                                    <div className="nameShop">TongKhoPhuKien_MACO
                                    </div>
                                </div>
                            </div>
                            <div className="pr-pay">
                                <div className="price-products">
                                    <div className="div">
                                        <img className={"img-pay"} src="abc.png" alt=""/>
                                        <span className={"text-pay"}>Tai nghe Bluetooth không dây Pro 4 TWS 5.0 giảm tiếng ồn, định vị đổi tên âm thanh chuẩn HOT HOT</span>
                                    </div>
                                    <div className="div1">
                                        <span>Loại: Ngẫu nhiên Màu</span>
                                    </div>
                                    <div className="div2">
                                        <span>₫79.000</span>
                                    </div>
                                    <div className="div3">
                                        <span>1</span>
                                    </div>
                                    <div className="div5">
                                        <span>₫79.000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="totalAmount">
                                <div className="body-amount">
                                    <div className="total">
                                        <div className="sum-pr">Tổng số tiền (1 sản phẩm):</div>
                                        <span className={"sum-cs"}>₫101.200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}