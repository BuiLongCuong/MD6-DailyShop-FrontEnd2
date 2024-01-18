import "./Cart.css"
export const CartItem =({itemDetails})=>{

    return(
            <div className="nameBody2">
                <div className="col1Body">
                    <div className="orderDetail">
                        <div className="removeOrder">Xóa</div>
                        <div className="imageOrder"><img src={itemDetails.product.photo[0]?.photoName} alt="" style={{width: "96px",height: "69px"}}/></div>
                        <div className="infoOrder">
                            <div className="infoPr">
                                <div className="namePr">{itemDetails.product.productName}</div>
                                <div className="categoryPro"> Loại: {itemDetails.product.category.name}</div>
                            </div>
                            <div className="pricePr">
                                {itemDetails.product.price}
                            </div>
                        </div>
                        {/*<div className="quantityPr">*/}
                        {/*    <button className={"btn1"} onClick={handleDecrease}>-</button>*/}
                        {/*    <input type="text" value={quantity} readOnly />*/}
                        {/*    <button className={"btn2"} onClick={handleIncrease}>+</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
    )
}