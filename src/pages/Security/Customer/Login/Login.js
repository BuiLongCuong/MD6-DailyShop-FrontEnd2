import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {login} from "../../../../redux/service/customerService";
import * as Yup from "yup";
import {useState} from "react";
import * as React from "react";
import toast, {Toaster} from "react-hot-toast";

export default function Login() {
    const [isShowPassword, setIsShowPassword] = useState();
    const loginSchema = Yup.object().shape({
        account: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
        password: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkProfile = () => {
        const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"));
        if (currentCustomer.checkProfile === false) {
            navigate("/informationCus")
        } else {
            navigate("/customer")
            // console.log("Chuyển đến giao diện của người dùng")
        }
    }
    const handleLogin= async (values)=>{
        try {
           await dispatch(login(values)).unwrap();
           checkProfile()
        }catch (e ){
            toast.error(e.message)
        }
    }

    return (
        <>
            <div className="main1">
                <div className="headerLogin">
                    <div className="headerDetail">
                        <div className="left">
                            <div className="logo">
                                <img src="/images/img_8.png"
                                     alt=""/>
                            </div>
                            <div className="title">
                                Đăng nhập
                            </div>
                        </div>
                        <div className="right">
                            <p>Bạn cần giúp đỡ?</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="background">
                        <img src="/images/img_9.png" alt=""/>
                    </div>
                    <div className="Login">
                        <div className="row1">
                            <div className="introLogin">
                                <p>Đăng nhập</p>
                            </div>
                        </div>

                        <div className="row2">
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                            <Formik initialValues={
                                {
                                    account: '',
                                    password: ''
                                }
                            } onSubmit={(values) => {
                                handleLogin(values)
                            }}
                                    validationSchema={loginSchema}
                            >
                                <Form>
                                    <div className="usernameLogin">
                                        <Field type="text" name="account" placeholder="Tên đăng nhập"/>
                                        <div className="validate">
                                            <p style={{color: "red"}}> <ErrorMessage name={"account"}/></p>
                                        </div>
                                    </div>
                                    <div className="passwordLogin">
                                        <Field type={isShowPassword ? "text" : "password"} name="password" placeholder="Mật khẩu" />
                                        <i className={isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}></i>
                                        <div className="validate">
                                            <p style={{color: "red"}}> <ErrorMessage name={"password"}/></p>
                                        </div>
                                    </div>
                                    <div className="buttonLogin">
                                        <button type="submit">ĐĂNG NHẬP</button>
                                    </div>
                                </Form>
                            </Formik>
                            <div className="note">
                                <div className="col1"></div>
                                <div className="col2">
                                    HOẶC
                                </div>
                                <div className="col3"></div>
                            </div>
                            <div className="other">
                                <div className="loginGoogle">
                                    <button style={{justifyContent: "center"}}>
                                        <div className="icon"><img src="/images/img.png" alt=""
                                                                   style={{width: "25px", height: "25px"}}/></div>
                                        <div className="press">Google</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row3">
                            <div className="Register">
                                Bạn chưa có tài khoản ?
                                <Link to={"/register"}><p>Đăng ký</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerLogin"></div>
            </div>
        </>
    )
}