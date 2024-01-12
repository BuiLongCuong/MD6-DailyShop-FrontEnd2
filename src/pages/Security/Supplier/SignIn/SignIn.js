import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import './SignIn.css'
import * as Yup from "yup";
import {signIn} from "../../../../redux/service/supplierService";

export default function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const supplier = useSelector(({supplier}) => {
        // console.log(supplier.currentSupplier)
        return supplier.currentSupplier
    })
    const loginSchema = Yup.object().shape({
        account: Yup.string()
            .min(2, 'Tên tài khoản quá ngắn (tối thiểu 2 ký tự)!')
            .max(50, 'Tên tài khoản quá dài (tối đa 50 ký tự)!')
            .matches(/^[a-zA-Z0-9_]+$/, 'Tên tài khoản không được chứa ký tự đặc biệt hoặc có dấu!')
            .required('Vui lòng nhập đủ thông tin!'),
        password: Yup.string()
            .min(5, 'Mật khẩu quá ngắn (tối thiểu 5 ký tự)!')
            .max(50, 'Mật khẩu quá dài (tối đa 50 ký tự)!')
            .matches(/^[a-zA-Z0-9_]+$/, 'Mật khẩu không được chứa ký tự đặc biệt hoặc có dấu!')
            .required('Vui lòng nhập đủ thông tin!'),
    })
    const handleSubmit = (values) => {
        console.log("Nhà cung cấp đăng nhập thành công")
        dispatch(signIn(values)).then(() => {
            navigate("/supplier")
        })


    };


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
                                            <Formik initialValues={{
                                                account: "",
                                                password: ""
                                            }} onSubmit={handleSubmit}
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
                                                        <Field className="password" type={"password"} name={"password"}
                                                               placeholder="Mật khẩu"/>
                                                        <div className={"errPassword"}><ErrorMessage name={"password"}/>
                                                        </div>
                                                    </div>

                                                    <button className="button" type="submit">
                                                        Đăng Nhập
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