import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {editSupplier, getCurrentSupplierDetails} from "../../../redux/service/supplierService";
import {Field, Form, Formik} from "formik";
import './InforSupp.css'
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";

export function InformationSupplier() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const supplier = useSelector(state => state.supplier.currentSupplierDetails)
    const [photo, setPhoto] = useState("");


    const provinces = useSelector(state => {return state.address.listProvince});
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));
    console.log(supplier)

    useEffect(() => {
        dispatch(getCurrentSupplierDetails())
    }, []);

    useEffect(() => {
        dispatch(getAllProvince())
    }, [])

    const getDistricts = (event) => {
        dispatch(getAllDistrict(event.target.value))
    }

    const getWards = (event) => {
        dispatch(getAllWard(event.target.value))
    }

    const EditSupplier = (values) => {
        values.account = currentSupplier;
        values.imageSupplier = photo;
        console.log(values)
        dispatch(editSupplier(values)).then(() => {
            navigate("/supplier/products")
        })
    }

    const handleChange1 = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            await uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto(url);
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
                            <p>Thông tin của nhà cung cấp</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="account">
                            <p><i className="fa-solid fa-user"></i>
                                {
                                    currentSupplier.account
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <Formik initialValues={
                        currentSupplier
                } onSubmit={EditSupplier}

                >
                    <Form>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails1">
                                    <div>
                                        <div className="item">
                                            <div className={"title"}>Tên shop:</div>
                                            <div className="input">
                                                <Field type="text" name="supplierName" placeholder={"Nhập tên shop"}/>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Tên người bán:
                                            </div>
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
                                                                    <option
                                                                        value={district.id}>{district.districtName}</option>
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
                                            {(photo) ? (
                                                <div className="imageContainer">
                                                    <img src={photo ?? ''} alt="" style={{border: "50%"}}/>
                                                </div>
                                            ) : (
                                                <img src={"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"}
                                                    alt="Default Avatar" style={{border: "50%"}}/>

                                            )}
                                        </div>
                                        <div className="chooseAvtSupp">
                                            <input
                                                name="imageSupplier"
                                                type="file"
                                                multiple
                                                onChange={handleChange1}
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