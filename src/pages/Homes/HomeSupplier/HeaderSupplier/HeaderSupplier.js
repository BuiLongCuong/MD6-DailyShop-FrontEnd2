import "./HeaderSupplier.css"

export default function HeaderSupplier(){
    return(
        <>
            <div className="header_supplier">
                <div className="left">
                    <div className="logo"><img src="/images/img_8.png" alt=""/></div>
                    <div className="currentPage">Kênh Người Bán</div>
                </div>
                <div className="right">
                    <div className="user">
                        <div className="avatar">
                            <img src="https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg" alt=""/>
                        </div>
                        <div className="username">Linhtruong2</div>
                    </div>
                    <div className="notification"><i className="fa-regular fa-bell"></i><div>2</div></div>
                </div>
            </div>
        </>
    )
}