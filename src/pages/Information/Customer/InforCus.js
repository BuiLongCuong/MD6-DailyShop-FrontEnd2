import {Field, Form, Formik} from "formik";
import './InforCus.css'
import {useState} from "react";

export function InformationCustomer() {
    const [photo, setPhoto] = useState([]);


    return (
        <>
            <div className="main3">
                <div className="headerInfo">
                    <div className="left">
                        <div className="logo">
                            <img src="/images/img_8.png" alt=""/>
                        </div>
                        <div className="title">
                            <div className="detail">
                                <p>Thông tin của tôi</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="account">
                            <p>builongcuong123</p>
                        </div>
                    </div>
                </div>
                <Formik initialValues={
                    {
                        customerName: '',
                        address: '',
                        phone: '',
                        dateOfBirth: '',
                        imageCustomer : ''
                    }
                } onSubmit={(values) => {
                    console.log(values)
                }}>
                    <Form>
                        <div className="bodyInfo">
                            <div className="contentInfo">

                                <div className="infoDetails">
                                    <div className="infoName">
                                        <div className="noteName">
                                            <p>Tên:</p>
                                        </div>
                                        <div className="name">
                                            <Field type="text" name="customerName" placeholder={"Nhập họ và tên"}/>
                                        </div>
                                    </div>
                                    <div className="addressDetail">
                                        <div className="select1">
                                            <select name="" id="">
                                                <option value="">Hà Nội</option>
                                                <option value="">HCM</option>
                                                <option value="">Đà Nẵng</option>
                                            </select>
                                        </div>
                                        <div className="select2">
                                            <select name="" id="">
                                                <option value="">Đông Anh</option>
                                                <option value="">Quận 12</option>
                                                <option value="">ABC</option>
                                            </select>
                                        </div>
                                        <div className="select3">
                                            <select name="" id="">
                                                <option value="">ABC</option>
                                                <option value="">ABC</option>
                                                <option value="">ABC</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="infoAddress">
                                        <div className="noteAddress">
                                            <p>Địa chỉ:</p>
                                        </div>
                                        <div className="address">
                                            <Field type="text" name="address" placeholder={"Địa chỉ chi tiết"}/>
                                        </div>
                                    </div>
                                    <div className="infoPhone">
                                        <div className="notePhone">
                                            <p>Số điện thoại:</p>
                                        </div>
                                        <div className="phone">
                                            <Field type="text" name="phone" placeholder={"Nhập số điện thoại"}/>
                                        </div>
                                    </div>
                                    <div className="infoBirthday">
                                        <div className="noteBirthday">
                                            <p>Ngày sinh:</p>
                                        </div>
                                        <div className="birthday">
                                            <Field type="date" name="dateOfBirth"/>
                                        </div>
                                    </div>
                                    <div className="decision">
                                        <div className="cancel">
                                            <button type={"submit"}>Hủy</button>
                                        </div>
                                        <div className="save">
                                            <button type={"submit"}>Lưu</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="imageCustomer">
                                    <div className="avatarOfGuy">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="chooseAvt">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}