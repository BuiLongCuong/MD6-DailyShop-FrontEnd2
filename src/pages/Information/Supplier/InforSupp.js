import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {editSupplier, findSupplierByAccountId} from "../../../redux/service/supplierService";
import {Field, Form, Formik} from "formik";
import './InforSupp.css'
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../firebase/firebase";
import {v4} from "uuid";
import {getAllDistrict, getAllProvince, getAllWard} from "../../../redux/service/addressService";

export function InformationSupplier(){
    const [photo, setPhoto] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // doi tuong supplier tim duoc thong qua id cua doi tuong trong local storage
    const supplier =useSelector(state => state.supplier.supplierSignInFirst)

    const provinces = useSelector(state => {
        return state.address.listProvince
    });
    const districts = useSelector(state => state.address.listDistrict);
    const wards = useSelector(state => state.address.listWard);

    const currentSupplier = JSON.parse(localStorage.getItem("currentSupplier"));

    useEffect(() => {
        dispatch(findSupplierByAccountId(currentSupplier.id))
    }, [])

    useEffect(() => {
        dispatch(getAllProvince())

    }, [])


    const getDistricts =(event)=>{
        console.log(event.target.value)
        dispatch(getAllDistrict(event.target.value))
    }

    const getWards =(event)=>{
        console.log(event.target.value)
        dispatch(getAllWard(event.target.value))
    }

    const EditSupplier = (values) => {
        values.account = currentSupplier
        dispatch(editSupplier(values)).then(() => {
            navigate("/supplier")
        })
    }

    const handleChange1 = (e) => {
        const file = e.target.files[0];

        if (file) {
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto([{ photoName: url }]);
                });
            });
        }
    };


    return(
        <>
            <div className="main3">
                <div className="headerInfo">
                    <div className="left">
                        <div className="logo">
                            <img src="/images/img_8.png" alt=""/>
                        </div>
                        <div className="title">
                            <div className="detail">
                                <p>Thông tin của nhà cung cấp</p>
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
                        supplier
                    }
                } onSubmit={EditSupplier}>
                    <Form>
                        <div className="bodyInfo">
                            <div className="contentInfo">
                                <div className="infoDetails">
                                    <div className="infoContactName">
                                        <div className="noteContactName">
                                            <p>Tên liên hệ:</p>
                                        </div>
                                        <div className="nameContactName">
                                            <Field type="text" name="contactName" placeholder={"Nhập tên liên hệ"}/>
                                        </div>
                                    </div>
                                    <div className="infoNameSupp">
                                        <div className="noteNameSupp">
                                            <p>Tên người bán:</p>
                                        </div>
                                        <div className="nameSupp">
                                            <Field type="text" name="supplierName" placeholder={"Nhập họ và tên"}/>
                                        </div>
                                    </div>
                                    <div className="addressDetail">
                                        <div className="select1">
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
                                        <div className="select2">
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
                                        <div className="select3">
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
                                    <div className="infoAddress">
                                        <div className="noteAddress">
                                            <p>Địa chỉ:</p>
                                        </div>
                                        <div className="address">
                                            <Field type="text" name="specificAddress" placeholder={"Địa chỉ chi tiết"}/>
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
                                    <div className="decision">
                                        <div className="cancel">
                                            <button type={"submit"}>Hủy</button>
                                        </div>
                                        <div className="save">
                                            <button type={"submit"}>Lưu</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="imageSupp">
                                    <div className="avatarOfSupp">
                                        {
                                            photo.map((p, index) => (
                                                <div key={index} className="imageContainer">
                                                    <img src={p.photoName} alt="" style={{ border: "50%"}}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="chooseAvtSupp">
                                        <Field
                                            nameClass="choose"
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
                    </Form>
                </Formik>
            </div>
        </>
    )
}