import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import './SignIn.css'
import * as Yup from "yup";
import {signIn} from "../../../../redux/service/supplierService";
import {useState} from "react";
import * as React from "react";
import {login} from "../../../../redux/service/customerService";
import toast, {Toaster} from "react-hot-toast";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isShowPassword, setIsShowPassword] = useState();
    const supplier = useSelector(({supplier}) => {
        // console.log(supplier.currentSupplier)
        return supplier.currentSupplier
    })
    const loginSchema = Yup.object().shape({
        account: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
        password: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
    })
    const checkProfile = () => {
        const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
        if (currentSupplier.checkProfile === false) {
            navigate("/informationSupp")
        } else {
            navigate("/supplier/products")
        }
    }
    const handleSignIn= async (values)=>{
        try {
            await dispatch(signIn(values)).unwrap();
            checkProfile()
        }catch (e ){
            toast.error(e.message)
        }
    }



    return (
        <>
            <div className="contai">
                <div className="headerSignIn">
                    <div className="navbar">
                        <div className="left">
                            <div className="logo">
                                <img src="/images/img_8.png" alt=""/>
                            </div>
                            <div className="user">
                                <span>Kênh Người Bán</span>
                            </div>
                        </div>
                        <div className="right">
                            <span>Bạn cần giúp đỡ ?</span>
                        </div>
                    </div>
                </div>
                <div className="contentSignIn">
                    <div className="body">
                        <div className="banner">
                            <div className="content-banner">
                                <div className="text">
                                    <span>Bán hàng chuyên nghiệp</span>
                                </div>
                                <div className="text1">
                                    <span>Quản lý shop của bạn một cách hiệu quả hơn trên DailyShop với DailyShop - Kênh Người bán</span>
                                </div>
                                <div className="logo">
                                    <img src="/images/img_7.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="login">
                            <div className="form-login">
                                <div className="header-login">
                                    <div className="token-login">
                                        <div className="text-login">
                                            <span>Đăng Nhập</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-login">
                                    <div className="body-login">
                                        <div className="input">
                                            <Toaster
                                                position="top-center"
                                                reverseOrder={false}
                                            />
                                            <Formik initialValues={{
                                                account: "",
                                                password: ""
                                            }} onSubmit={(values) => {
                                                handleSignIn(values)
                                            }}
                                                    validationSchema={loginSchema}
                                            >
                                                <Form>
                                                    <div className="input-username">
                                                        <Field className="username" name={"account"}
                                                               placeholder="Tên đăng nhập"
                                                        />
                                                        <div className={"errUsername"}><ErrorMessage name={"account"}/>
                                                        </div>
                                                    </div>
                                                    <div className="input-password">
                                                        <Field className="password" type={isShowPassword ? "text" : "password"} name={"password"}
                                                               placeholder="Mật khẩu"/>
                                                        <i className={isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}></i>
                                                        <div className={"errPassword"}><ErrorMessage name={"password"}/>
                                                        </div>
                                                    </div>

                                                    <button className="button" type="submit">Đăng Nhập
                                                    </button>
                                                </Form>
                                            </Formik>
                                        </div>
                                        <div className="forgot">
                                            {/*<div className="forgot-password">*/}
                                            {/*    <span>Quên Mật Khẩu</span>*/}
                                            {/*</div>*/}
                                            {/*<div className="SMS">*/}
                                            {/*    <span>Đăng nhập với SMS</span>*/}
                                            {/*</div>*/}
                                        </div>
                                        <div className="and">
                                            <div className="hr">
                                                <div></div>
                                            </div>
                                            <div className="or">
                                                <span>HOẶC</span>
                                            </div>
                                            <div className="hr2">
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="otherSignIn">
                                            <div className="signInGoogle">
                                                <button style={{justifyContent: "center"}}>
                                                    <div className="icon"><img src="/images/img.png" alt=""
                                                                               style={{width: "25px", height: "25px"}}/></div>
                                                    <div className="press">Google</div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="transferToSignUp">
                                            <div className="signUp">
                                                Bạn chưa có tài khoản ?
                                                <Link to={"/signUp"}><p>Đăng ký</p></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*    <!--    <div class="footer"></div>-->*/}
            </div>

        </>
    );
}