import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {editSupplier, getCurrentSupplierDetails} from "../../../redux/service/supplierService";
import {Field, Form, Formik, useFormik} from "formik";
import './InforSupp.css'
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";

export function InformationSupplier() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // doi tuong supplier tim duoc thong qua id cua doi tuong trong local storage
    const supplier = useSelector(state => state.supplier.currentSupplierDetails)
    const [photo, setPhoto] = useState("");


    const provinces = useSelector(state => {return state.address.listProvince});
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));

    useEffect(() => {
        dispatch(getCurrentSupplierDetails());
        dispatch(getAllProvince());
    }, [dispatch]);

    const handleProvinceChange = async (event) => {
        await formik.setFieldValue("district.id", null)
        await formik.setFieldValue("ward.id", null)
        await formik.setFieldValue("province.id", parseInt(event.target.value));
        dispatch(getAllDistrict(event.target.value));
    };

    const handleDistrictChange = (event) => {
        formik.setFieldValue("district.id", parseInt(event.target.value));
        formik.setFieldValue("ward.id", "")
        dispatch(getAllWard(event.target.value));
    };

    const handleWardChange = (event) => {
        formik.setFieldValue("ward.id", parseInt(event.target.value));
    };

    const EditSupplier = (values) => {
        values.imageSupplier = photo;
        dispatch(editSupplier(values)).then(() => {
            navigate("/supplier/products")
        })
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: supplier?.id,
            account: {
                id: supplier?.account?.id,
            },
            contactName: supplier?.contactName,
            supplierName: supplier?.supplierName,
            specificAddress: supplier?.specificAddress,
            phone: supplier?.phone,
            startDate: supplier?.startDate,
            imageSupplier: supplier?.imageSupplier,
            province: {
                id: supplier?.province?.id || null,
            },
            district: {
                id: supplier?.district?.id || null,
            },
            ward: {
                id: supplier?.ward?.id || null,
            },
        },
        onSubmit: EditSupplier,
    });

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
                <Formik>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails1">
                                    <div>
                                        <div className="item">
                                            <div className={"title"}>Tên shop:</div>
                                            <div className="input">
                                                <Field type="text" name="supplierName" placeholder={"Nhập tên shop"}
                                                       onChange={(event) => {
                                                           formik.setFieldValue("supplierName", event.target.value)
                                                       }}
                                                />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Tên người bán:
                                            </div>
                                            <div className="input">
                                                <Field type="text" name="contactName" placeholder={"Nhập họ và tên"}
                                                       onChange={(event) => {
                                                           formik.setFieldValue("contactName", event.target.value)
                                                       }}
                                                />
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
                                                        onChange={handleProvinceChange}
                                                    >
                                                        <option value="" selected={true}>Chọn Tỉnh/Thành phố</option>
                                                        {
                                                            provinces?.map((province) => (
                                                                <option key={province.id} value={province.id}>
                                                                    {province.provinceName}
                                                                </option>
                                                            ))
                                                        }
                                                    </Field>
                                                </div>
                                                <div className="select">
                                                    <Field
                                                        as={"select"}
                                                        name={"district.id"}
                                                        onChange={handleDistrictChange}
                                                    >
                                                        <option value="" selected={true}>Chọn Quận/Huyện</option>
                                                        {
                                                            districts?.map((district) => (
                                                                <option key={district.id} value={district.id}>
                                                                    {district.districtName}
                                                                </option>
                                                            ))
                                                        }
                                                    </Field>
                                                </div>
                                                <div className="select">
                                                    <Field
                                                        as={"select"}
                                                        name={"ward.id"}
                                                        onChange={handleWardChange}
                                                    >
                                                        <option value="" selected={true}>Chọn Phường/Xã</option>
                                                        {
                                                            wards?.map((ward) => (
                                                                <option key={ward.id} value={ward.id}>
                                                                    {ward.wardName}
                                                                </option>
                                                            ))
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
                                                       placeholder={"Số nhà, tên đường, thôn, xóm, làng, ấp..."}
                                                       onChange={(event) => {
                                                           formik.setFieldValue("specificAddress", event.target.value)
                                                       }}
                                                />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Số điện thoại:
                                            </div>
                                            <div className="input">
                                                <Field type="text" name="phone" placeholder={"Nhập số điện thoại"}
                                                       onChange={(event) => {
                                                           formik.setFieldValue("phone", event.target.value)
                                                       }}
                                                />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title"></div>
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