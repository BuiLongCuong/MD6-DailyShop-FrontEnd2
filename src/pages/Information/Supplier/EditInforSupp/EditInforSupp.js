import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {editSupplier, getCurrentSupplierDetails} from "../../../../redux/service/supplierService";
import {Field, Form, Formik} from "formik";
import './EditInforSupp.css'
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../../firebase/firebase";
import {v4} from "uuid";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../../redux/service/addressService";

export function EditInforSupp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const supplier = useSelector(state => {
        return state.supplier.currentSupplierDetails;
    })
    console.log(supplier)
    const [photo, setPhoto] = useState("");

    const provinces = useSelector(state => {
        return state.address.listProvince
    });
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const [address, setAddress] = useState(
        {province: "", district: "", ward: ""}
    );

    useEffect(() => {
        dispatch(getCurrentSupplierDetails())
        dispatch(getAllProvince())
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllDistrict(supplier?.province?.id));
        dispatch(getAllWard(supplier?.district?.id));
        setAddress({province: supplier?.province?.id, district: supplier?.district?.id, ward: supplier?.ward?.id})
    }, [supplier]);

    const handleProvinceChange = async (event) => {
        dispatch(getAllDistrict(event.target.value));
        setAddress({...address, province: event.target.value})
    };

    const handleDistrictChange = (event) => {
        dispatch(getAllWard(event.target.value));
        setAddress({...address, district: event.target.value})
    };

    const handleWardChange = (event) => {
        setAddress({...address, ward: event.target.value})
    };

    const EditSupplier = (values) => {
        values = {...values}
        values.imageSupplier = photo;
        values.province = {id: address.province}
        values.district = {id : address.district}
        values.ward = {id: address.ward}
        console.log(values)
        dispatch(editSupplier(values)).then(() =>{
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
                <Formik
                    initialValues={supplier}
                    enableReinitialize={true}
                    onSubmit={EditSupplier}
                >
                    <Form>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails2">
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
                                                    <select name={"province"} onChange={handleProvinceChange} value={address.province}>
                                                        <option value="" selected={true}>Chọn Tỉnh/Thành phố</option>
                                                        {
                                                            provinces?.map((province) => (
                                                                <option key={province.id} value={province.id}>
                                                                    {province.provinceName}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="select">
                                                    <select name={"district"} onChange={handleDistrictChange} value={address.district}>
                                                        <option value="" selected={true}>Chọn Quận/Huyện</option>
                                                        {
                                                            districts?.map((district) => (
                                                                <option key={district.id} value={district.id}>
                                                                    {district.districtName}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <div className="select">
                                                    <select name={"ward"} onChange={handleWardChange} value={address.ward}>
                                                        <option value="" selected={true}>Chọn Phường/Xã</option>
                                                        {
                                                            wards?.map((ward) => (
                                                                <option key={ward.id} value={ward.id}>
                                                                    {ward.wardName}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                            </div>
                                            <div className="input">
                                                {/*<Field type="text" name="specificAddress"*/}
                                                {/*       placeholder={"Địa chỉ chi tiết..."}/>*/}
                                                <Field type="text" name="specificAddress"
                                                       placeholder={"Số nhà, tên đường, thôn, xóm, làng, ấp..."}
                                                    // onChange={(event) => {
                                                    //     formik.setFieldValue("specificAddress", event.target.value)
                                                    // }}
                                                />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                                Số điện thoại:
                                            </div>
                                            <div className="input">
                                                {/*<Field type="text" name="phone" placeholder={"Nhập số điện thoại"}/>*/}
                                                <Field type="text" name="phone" placeholder={"Nhập số điện thoại"}
                                                    // onChange={(event) => {
                                                    //     formik.setFieldValue("phone", event.target.value)
                                                    // }}
                                                />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="title">
                                            </div>
                                            <div className="input">
                                                <div className="decision">
                                                    <div className="cancel">
                                                        <Link to={"/supplier/products"}>
                                                            <button type={"button"}>Hủy</button>
                                                        </Link>
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
                                                <img
                                                    src={supplier.imageSupplier}
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