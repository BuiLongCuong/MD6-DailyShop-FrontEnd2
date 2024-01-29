import "./HeaderSupplier.css"
import {useDispatch, useSelector} from "react-redux";
import {getCurrentSupplierDetails, logout} from "../../../../redux/service/supplierService";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function HeaderSupplier(){
    // const supplier = useSelector(({supplier}) => {
    //     return supplier.currentSupplierDetails;
    // })
    useEffect(() => {
        dispatch(getCurrentSupplierDetails())
    }, []);

    const supplier = useSelector(state => state.supplier.currentSupplierDetails);
    console.log(supplier)
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
                            <img src={ supplier &&
                                supplier.imageSupplier ? supplier?.imageSupplier : "https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"} alt=""/>
                        </div>
                        <div className="username">
                            {
                                supplier?.supplierName
                            }
                        </div>
                    </div>
                    <div className="logoutSupp">
                        {
                            supplier ? (
                                <div className="logOutSupplier">
                                        <button onClick={()=>{
                                            dispatch(logout()).then(() => {
                                                navigate('/signIn')
                                            })
                                        }}> Đăng xuất</button>
                                </div>
                            ) : (
                                ""
                            )
                        }
                    </div>

                    <div className="notification"><i className="fa-regular fa-bell"></i><div>2</div></div>
                </div>
            </div>
        </>
    )
}