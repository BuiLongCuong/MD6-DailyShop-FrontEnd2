import "./Footer.css"
export default function Footer() {
    return (
        <>
            <div className="footer-cover">
                <div className="footer">
                    <div className="footer-left-side">
                        <h2 style={{color:"red"}}>DAILYSHOP</h2>
                        <h5>Địa chỉ : <span>136 Mỹ Đình, Nam Từ Liêm, Ha Nội</span></h5>
                        <h5>Phone : 0985683486</h5>
                        <h5>Email : dailyshop@gmail.com</h5>

                    </div>
                    <div className="footer-center-left">
                        <h4>Cửa hàng</h4>
                        <h5>Liên hệ</h5>
                        <h5>Thông tin về chúng tôi</h5>
                        <h5>Sản phẩm kinh doanh</h5>
                    </div>
                    <div className="footer-center-right">
                        <h5>Thông tin tài khoản</h5>
                        <h5>Giỏ hàng</h5>
                        <h5>Danh sách ưa thích</h5>
                    </div>
                    <div className="footer-right-side">
                        <h4>Khuyến mãi và ưu đãi</h4>
                    </div>

                </div>
            </div>
        </>
    )
}