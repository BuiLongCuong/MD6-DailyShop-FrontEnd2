import toast, {Toaster} from "react-hot-toast";
import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import './SignUp.css'
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {signUp} from "../../../../redux/service/supplierService";
import {getAxios} from "../../../../redux/service/axios/getAxios";
import {useState} from "react";



export default function SignUp() {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState();
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState();
    const signUpSchema = Yup.object().shape({
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
        email: Yup.string()
            .email('Email không hợp lệ!')
            .required('Vui lòng nhập đủ thông tin!'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Xác nhận mật khẩu không khớp!')
            .required('Vui lòng nhập đủ thông tin!'),
    });

    // Hàm kiểm tra email đã tồn tại hay chưa
    // const checkEmailExist = async (email) => {
    //     try {
    //         // Gọi API endpoint để kiểm tra email
    //         const response = await getAxios().get(`suppliers/check-email?email=${email}`);
    //
    //         // Kiểm tra xem email đã tồn tại hay không
    //         // Nếu response.data.emailExist === true, tức là email đã tồn tại
    //         // Ngược lại, nếu response.data.emailExist === false, tức là email không tồn tại
    //         return response.data.emailExist;
    //     } catch (error) {
    //         // Xử lý lỗi nếu có
    //         console.error('Lỗi khi kiểm tra email:', error);
    //         // Trả về false nếu có lỗi (bạn có thể xử lý tùy ý)
    //         return false;
    //     }
    // };

    const handleSubmit = async (values) => {
        // const isEmailExist = await checkEmailExist(values.email);
        // if (isEmailExist) {
        //     alert('Email đã tồn tại!');
        // }else {
        //     await signUp(values).then (() => {
        //         navigate('/signIn');
        //     });
        //
        // }
        
        signUp(values).then (() => {
            toast.success('Đăng ký tài khoản thành công!');
            navigate('/signIn');
        });
    };
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="cont">
                <div className="header-signup">
                    <div className="navbar-signup">
                        <div className="left-signup">
                            <div className="logo-signup">
                                <img src="/images/img_8.png" alt=""/>
                            </div>
                            <div className="text-signup">
                                <span>Đăng ký</span>
                            </div>
                        </div>
                        <div className="right-signup">
                            <span>Bạn cần giúp đỡ</span>
                        </div>
                    </div>
                </div>
                <div className="body-signup">
                    <div className="content-signup">
                        <div className="textarea-signup">
                            <div className="form-text-signup">
                                <div className="shoppe-signup">
                                    DailyShop Việt Nam
                                </div>
                                <div className="supplier-signup">
                                    Trở thành người bán ngay hôm nay
                                </div>
                                <div className="internet-signup">
                                    <div className="logo-signup">

                                    </div>
                                    <div className="text-signup">
                                        Nền tảng thương mại điện tử hàng đầu Đông Nam Á và Đài Loan
                                    </div>
                                </div>
                                <div className="trademark-signup">
                                    <div className="logo-signup">

                                    </div>
                                    <div className="text-signup">
                                        Phát triển trở thành thương hiệu toàn cầu
                                    </div>
                                </div>
                                <div className="vn-signup">
                                    <div className="logo-signup">

                                    </div>
                                    <div className="text-signup">
                                        Dẫn đầu lượng người dùng trên ứng dụng mua sắm tại Việt Nam
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-login-signup">
                            <div className="register-signup">
                                <div className="text-signup">
                                    <span>Đăng Ký</span>
                                </div>
                                <div className="forme">
                                    <Formik initialValues={
                                        {
                                            account: "",
                                            password: "",
                                            confirmPassword: "",
                                            email: ""
                                        }
                                    } onSubmit={handleSubmit}
                                            validationSchema={signUpSchema}>
                                        <Form>
                                            <div className="text5">
                                                <div className="input1">
                                                    <Field type="text" className={"account-signup"} name={"account"}
                                                           placeholder={"Tên đăng nhập"}/>
                                                    <div className={"account-signup-err"}><ErrorMessage
                                                        name={"account"}/></div>
                                                </div>
                                                <div className="input2">
                                                    <Field type={isShowPassword ? "text" : "password"} className={"password-signup"}
                                                           name={"password"}
                                                           placeholder={"Mật Khẩu"}/>
                                                    <i className={isShowPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowPassword(!isShowPassword)}></i>
                                                    <div className={"password-signup-err"}><ErrorMessage
                                                        name={"password"}/></div>
                                                </div>
                                            </div>
                                            <div className="text6">
                                                <div className="input3">
                                                    <Field type={isShowConfirmPassword ? "text" : "password"} className={"confirm-signup"}
                                                           name={"confirmPassword"} placeholder={"Nhập lại mật khẩu"} />
                                                    <i className={isShowConfirmPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}></i>
                                                    <div className={"confirm-signup-err"}><ErrorMessage
                                                        name={"confirmPassword"}/></div>
                                                </div>
                                                <div className="input4">
                                                    <Field type="email" className={"email-signup"} name={"email"}
                                                           placeholder={"Email"}/>
                                                    <div className={"email-signup-err"}><ErrorMessage
                                                        name={"email"}/></div>
                                                </div>
                                                <div className={"btn"}>
                                                    <button type={"submit"}>Đăng Ký</button>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                                <div className="noteSignUp">
                                    <div className="col1"></div>
                                    <div className="col2">
                                        HOẶC
                                    </div>
                                    <div className="col3"></div>
                                </div>
                                <div className="otherSignUp">
                                    <div className="signUpGoogle">
                                        <button style={{justifyContent: "center"}}>
                                            <div className="icon"><img src="/images/img.png" alt=""
                                                                       style={{width: "25px", height: "25px"}}/></div>
                                            <div className="press">Google</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="transferToSignIn">
                                    <div className="signIn">
                                        Bạn đã có tài khoản ?
                                        <Link to={"/signIn"}><p>Đăng nhập</p></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-signup ">
                <div className="mkt-signup">
                    <div className="daily-signup">
                        <div className="header-signUp">
                            TẠI SAO NÊN BÁN HÀNG TRÊN DAILYSHOP
                        </div>
                    </div>
                    <div className="body-signup">
                        <div className="navbar-signup ">
                            <div className="col1-signup ">
                                <div className="fr-signup ">
                                    <div className="image-signup ">
                                        <img src="/images/img_1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">
                                    Miễn phí đăng ký
                                </div>
                                <div className="ship-signup ">
                                    Mở Shop và bán hàng dễ dàng hơn cùng DailyShop!
                                </div>
                            </div>
                            <div className="col2-signup ">
                                <div className="fr-signup ">
                                    <div className="images-signup ">
                                        <img src="/images/img_2.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">
                                    Công cụ marketing đa dạng
                                </div>
                                <div className="ship-signup ">
                                    Thu hút người mua và tăng trưởng đơn hàng với tính năng Flash Sale, Livestream,
                                    Mua Kèm Deal
                                    Sốc,...
                                </div>
                            </div>
                            <div className="col3-signup ">
                                <div className="fr-signup ">
                                    <div className="img-signup ">
                                        <img src="/images/img_3.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">Vận chuyển dễ dàng</div>
                                <div className="ship-signup ">Linh hoạt lựa chọn đơn vị vận chuyển và theo dõi chi
                                    tiết hành trình
                                    đơn
                                    hàng.
                                </div>
                            </div>
                        </div>
                        <div className="contents-signup ">
                            <div className="col4-signup ">
                                <div className="frs-signup ">
                                    <div className="img-signup ">
                                        <img src="/images/img_4.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">
                                    Siêu sale cùng Daily
                                </div>
                                <div className="ship-signup ">Bứt phá doanh số với các chiến dịch lớn: 9.9 Ngày Siêu Mua
                                    Sắm, 11.11
                                    Siêu
                                    Sale,...
                                </div>
                            </div>
                            <div className="col5-signup ">
                                <div className="fre-signup ">
                                    <div className="imge-signup ">
                                        <img src="/images/img_5.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">
                                    Hỗ trợ bán hàng hiệu quả
                                </div>
                                <div className="ship-signup ">Đa dạng tính năng giúp quản lý, tương tác với khách hàng
                                    và theo dõi
                                    hiệu quả
                                    hoạt động của Shop.
                                </div>
                            </div>
                            <div className="col6-signup ">
                                <div className="f-signup ">
                                    <div className="in-signup ">
                                        <img src="/images/img_6.png" alt=""/>
                                    </div>
                                </div>
                                <div className="mkt-signup ">
                                    Kết nối cộng đồng Người bán
                                </div>
                                <div className="ship-signup ">
                                    Chia sẻ kinh nghiệm bán hàng thực tế thông qua các hội thảo, khóa học trực tuyến
                                    và cổng
                                    thông tin hỗ trợ.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
