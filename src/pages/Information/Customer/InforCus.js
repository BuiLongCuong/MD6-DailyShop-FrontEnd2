import {Field, Form, Formik} from "formik";
import './InforCus.css'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editCustomer, findCustomerByAccountId} from "../../../redux/service/customerService";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";


export function InformationCustomer() {
    const dispatch = useDispatch()
    const navigate = useDispatch();

    const customer = useSelector(state => state.customer)

    const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"))

    const provinces = useSelector(state => {
        return state.address.listProvince
    });
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    useEffect(() => {
        dispatch(findCustomerByAccountId(currentCustomer.id))
    }, []);

    useEffect(() => {
        dispatch(getAllProvince())
    }, [])

    const getDistricts = (event) => {
        console.log(event.target.value)
        dispatch(getAllDistrict(event.target.value))
    }

    const getWards = (event) => {
        console.log(event.target.value)
        dispatch(getAllWard(event.target.value))
    }

    const EditCustomer = (values) => {
        values.account = currentCustomer
        dispatch(editCustomer(values)).then (() => {
            navigate("/supplier")
            console.log("Lấy thông tin người dùng login lần đầu tiên thành công")
        })
    }

    const [photo, setPhoto] = useState([]);

    const handleChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto([{photoName: url}]);
                });
            });
        }
    };

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
                                <p>Thông tin của khách hàng</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="account">
                            <p><i className="fa-solid fa-user"></i>
                                {
                                    currentCustomer.account
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <Formik initialValues={
                    {
                        customer
                    }
                } onSubmit={EditCustomer}>
                    <Form>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails">
                                    <div>
                                        <div className="item">
                                            <div className={"title"}>Họ và tên:</div>
                                            <div className="input">
                                                <Field type="text" name="contactName" placeholder={"Nhập họ và tên"}/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Địa chỉ:
                                            </div>
                                            <div className="input">
                                                <div className="select">
                                                    <Field
                                                        name={"province.id"}
                                                        as={"select"}
                                                        onChange={getDistricts}
                                                    >
                                                        <option value="" selected={true}>Chọn Tỉnh/Thành phố</option>
                                                        {
                                                            provinces.map((province) => {
                                                                return <>
                                                                    <option key={province.id} value={province.id}>
                                                                        {province.provinceName}
                                                                    </option>
                                                                </>
                                                            })
                                                        }
                                                    </Field>
                                                </div>
                                                <div className="select">
                                                    <Field
                                                        as={"select"}
                                                        name={"district.id"}
                                                        onChange={getWards}
                                                    >
                                                        <option value="" selected={true}>Chọn Quận/Huyện</option>
                                                        {
                                                            districts.map((district) => {
                                                                return <>
                                                                    <option value={district.id}>{district.districtName}</option>
                                                                </>
                                                            })
                                                        }
                                                    </Field>
                                                </div>
                                                <div className="select">
                                                    <Field
                                                        as={"select"}
                                                        name={"ward.id"}
                                                    >
                                                        <option value="" selected={true}>Chọn Phường/Xã</option>
                                                        {
                                                            wards.map((ward) => {
                                                                return <>
                                                                    <option value={ward.id}>{ward.wardName}</option>
                                                                </>
                                                            })
                                                        }
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                            </div>
                                            <div className="input">
                                                <Field type="text" name="specificAddress"
                                                       placeholder={"Địa chỉ chi tiết..."}/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Số điện thoại:
                                            </div>
                                            <div className="input">
                                                <Field type="text" name="phone" placeholder={"Nhập số điện thoại"}/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Ngày sinh:
                                            </div>
                                            <div className="input">
                                                <Field type="date" name="dateOfBirth" placeholder={"Nhập họ và tên"}/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                            </div>
                                            <div className="input">
                                                <div className="decision">
                                                    <div className="cancel">
                                                        <button type={"submit"}>Hủy</button>
                                                    </div>
                                                    <div className="save">
                                                        <button type={"submit"}>Lưu</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="imageSupp">
                                    <div>
                                        <div className="avatarOfSupp">

                                            {currentCustomer.imageCustomer ? (
                                                photo.map((p, index) => (
                                                    <div key={index} className="imageContainer">
                                                        <img src={p.photoName} alt="" style={{border: "50%"}}/>
                                                    </div>
                                                ))
                                            ) : (
                                                <img src={"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"} alt="Default Avatar" style={{border: "50%"}} />

                                            )}

                                            {/*{*/}
                                            {/*    photo.map((p, index) => (*/}
                                            {/*        <div key={index} className="imageContainer">*/}
                                            {/*            <img src={p.photoName} alt="" style={{border: "50%"}}/>*/}
                                            {/*        </div>*/}
                                            {/*    ))*/}
                                            {/*}*/}
                                        </div>
                                        <div className="chooseAvtSupp">
                                            <Field
                                                nameClass="choose"
                                                name="imageSupplier"
                                                type="file"
                                                multiple
                                                onChange={handleChange2}
                                                placeholder="Enter Photo"
                                            />
                                        </div>
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