import HeaderCustomer from "../Homes/HomeCustomer/HeaderCustomer/HeaderCustomer";
import './TransactionHistory.css'

export default function TransactionHistory() {
    return (
        <>
        <HeaderCustomer/>
            <>
                <div className="bodyHistory">
                    <div className="mainHistory">
                        <div className="row1Main">
                            <div className="col1NameShop">
                                GONO Tech
                            </div>
                            <div className="col2Notification">
                                <div className="tittleNoti">
                                    <i className="fa-solid fa-truck"></i> &nbsp;
                                    Đơn hàng đã được giao thành công
                                </div>
                                <div className="finish">
                                    &nbsp;| HOÀN THÀNH
                                </div>
                            </div>

                        </div>
                        <div className="row2Main">
                            <div className="col1Img">
                                <img src="/images/img_8.png" alt="" style={{ width: "152px", height:"73px"}}/>
                            </div>
                            <div className="col2Info">
                                <div className="row1Info">
                                    Tên sản phẩm
                                </div>
                                <div className="row2Info">
                                    Loại sản phẩm
                                </div>
                                <div className="row3Info">
                                    Số lượng sản phẩm
                                </div>
                            </div>
                            <div className="col3Price">
                                123.000 VNĐ
                            </div>
                        </div>
                        <div className="row3Main">
                            <div className="total">
                                <div className="tittleTotal">
                                    Thành tiền:
                                </div>
                                <div className="numberTotal">
                                    789.000 VNĐ
                                </div>
                            </div>
                            <div className="function">
                                <div className="repurchase">
                                    <button>Mua lại</button>
                                </div>
                                <div className="contact">
                                    <button>Liên hệ người bán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}