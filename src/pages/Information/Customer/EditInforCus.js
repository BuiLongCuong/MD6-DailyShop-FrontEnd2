import {Field, Form, Formik, useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import './InforCus.css'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editCustomer, getCurrentCustomerDetails} from "../../../redux/service/customerService";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";


export function EditInformationCustomer() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const customer = useSelector(state => state.customer.currentCustomerDetails)
    const [image, setImage] = useState("");


    const provinces = useSelector(state => {return state.address.listProvince});
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const currentCustomer = JSON.parse(localStorage.getItem("currentCustomer"))
    useEffect(() => {
        dispatch(getCurrentCustomerDetails());
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

    const EditCustomer = (values) => {
        values.account = currentCustomer;
        values.imageCustomer = image;
        dispatch(editCustomer(values)).then (() => {
            // navigate("/customer")
            console.log("Lấy thông tin người dùng login lần đầu tiên thành công")
        })
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: customer?.id,
            account: {
                id: customer?.account?.id,
            },
            customerName: customer?.customerName,
            dateOfBirth: customer?.dateOfBirth,
            specificAddress: customer?.specificAddress,
            phone: customer?.phone,
            imageCustomer: customer?.imageCustomer,
            province: {
                id: customer?.province?.id || null,
            },
            district: {
                id: customer?.district?.id || null,
            },
            ward: {
                id: customer?.ward?.id || null,
            },
        },
        onSubmit: EditCustomer,
    });

    const handleChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImage(url);
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
                <Formik>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails">
                                    <div>
                                        <div className="item">
                                            <div className={"title"}>Họ và tên:</div>
                                            <div className="input">
                                                <Field type="text" name="customerName" placeholder={"Nhập họ và tên"}
                                                       onChange={(event) => {
                                                           formik.setFieldValue("customerName", event.target.value)
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
                                            <div className="title">
                                                Ngày sinh:
                                            </div>
                                            <div className="input">
                                                <Field type="date" name="dateOfBirth"
                                                       onChange={(event) => {
                                                           formik.setFieldValue("dateOfBirth", event.target.value)
                                                       }}
                                                />
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
                                            {(image) ? (
                                                <div className="imageContainer">
                                                    <img src={image ?? ''} alt="" style={{border: "50%"}}/>
                                                </div>
                                            ) : (
                                                <img src={"https://png.pngtree.com/element_our/20200610/ourmid/pngtree-character-default-avatar-image_2237203.jpg"}
                                                     alt="Default Avatar" style={{border: "50%"}}/>

                                            )}
                                        </div>
                                        <div className="chooseAvtSupp">
                                            <input
                                                name="imageCustomer"
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