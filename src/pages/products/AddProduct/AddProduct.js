import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {add} from "../../../redux/service/productService";
import {getAllCategories} from "../../../redux/service/categoryService";
import "./AddProduct.css"
import * as Yup from "yup";
import * as React from "react";

function AddProduct() {
    const accountSupplier = JSON.parse(localStorage.getItem("currentSupplier"))
    console.log(accountSupplier)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState([]);

    const addSchema = Yup.object().shape({
        price: Yup.number()
            .positive('Số tài khoản phải lớn hơn 0!')
            .integer('Số tài khoản phải là số nguyên!')
            .required('Vui lòng nhập đủ thông tin!'),
        stockQuantity: Yup.number()
            .positive('Số tài khoản phải lớn hơn 0!')
            .integer('Số tài khoản phải là số nguyên!')
            .required('Vui lòng nhập đủ thông tin!'),
        productName: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
        description: Yup.string()
            .required('Vui lòng nhập đủ thông tin!'),
    });

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])
    const categories = useSelector(({categories}) => {
        return categories.list
    })
    const Create = (value) => {
        value.photo = photo;
        try {
            dispatch(add(value)).then(() => {
                navigate("/supplier")
            })
        } catch (e) {
        }
    }

    const handleChange = (e) => {
        const files = e.target.files;
        const remainingSlots = 6 - photo.length;

        if (files.length > remainingSlots) {
            alert("Bạn chỉ có thể thêm tối đa 6 ảnh.");
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const photoRef = ref(storage, `image/${file.name + v4()}`);
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhoto((prev) => [...prev, {photoName: url}]);
                });
            });
        }
    };


    // const handleChange = (e) => {
    //     const files = e.target.files;
    //     for (let i = 0; i < files.length; i++) {
    //         const file = files[i];
    //         const photoRef = ref(storage, `image/${file.name + v4()}`);
    //         uploadBytes(photoRef, file).then((snapshot) => {
    //             getDownloadURL(snapshot.ref).then((url) => {
    //                 setPhoto((prev) => [...prev, {photoName: url}]);
    //             });
    //         });
    //     }
    // };

    const handleDeleteImage = (index) => {
        const newPhotoArray = [...photo];
        newPhotoArray.splice(index, 1);
        setPhoto(newPhotoArray);
    };

    return (
        <>
            <div className="mainAddPr">
                <div className="headerAddPr">
                    <div className="headerDetailAddPr">
                        <div className="leftHeader">
                            <div className="logoHeader">
                                <img src="/images/img_8.png"
                                     alt=""/>
                            </div>
                            <div className="titleAdd">
                                <p>Thêm mới sản phẩm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Formik initialValues={
                    {
                        productName: '',
                        description: '',
                        price: '',
                        stockQuantity: '',
                        category: {
                            id: ""
                        },
                        account: {
                            id: accountSupplier.id
                        }

                    }
                } onSubmit={Create}
                        validationSchema={addSchema}
                >
                    <Form>

                        {
                            photo.length < 6 && (
                                <div className="imageContainer">
                                    <Field
                                        nameClass="choose"
                                        name="photo.photoName"
                                        type="file"
                                        multiple
                                        onChange={handleChange}
                                        placeholder="Enter Photo"
                                    />
                                </div>
                            )
                        }
                        <div className="frame">
                            <div className="image">
                                {/*<Field nameClass={"chooseImage"} name={"photo.photoName"} type={"file"} multiple onChange={handleChange}*/}
                                {/*       placeholder={" Enter Photo"}/>*/}
                                {/*{*/}
                                {/*    photo.map(p => (*/}
                                {/*        <>*/}
                                {/*            <img src={p.photoName} alt="" style={{width: "150px", height: "150px"}}/>*/}
                                {/*        </>*/}
                                {/*    ))*/}
                                {/*}*/}

                                <div className="listImage">
                                    {
                                        photo.map((p, index) => (
                                            <div key={index} className="imageContainer">
                                                <img src={p.photoName} alt=""
                                                     style={{width: "242px", height: "242px"}}/>
                                                <button className="deleteButton"
                                                        onClick={() => handleDeleteImage(index)}>X
                                                </button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="infoProduct">
                                <div className="contentProduct">
                                    <div className="nameProduct">
                                        <div className="label1">
                                            Nhập tên :
                                        </div>
                                        <div className="nameDetail">
                                            <Field name={"productName"} placeholder={"Tên sản phẩm"}/>
                                            <div className="validateNamePro">
                                                <p style={{color: "red"}}><ErrorMessage name={"productName"}/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="descriptionProduct">
                                        <div className="label2">
                                            Mô tả :
                                        </div>
                                        <div className="descriptionDetail">
                                            <Field as="textarea" cols={39} rows={3} name={"description"}
                                                   placeholder={"Mô tả sản phẩm"}/>
                                            <div className="validateDescription">
                                                <p style={{color: "red"}}><ErrorMessage name={"description"}/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="priceProduct">
                                        <div className="label3">
                                            Giá (VNĐ) :
                                        </div>
                                        <div className="priceDetail">
                                            <Field name={"price"} type={"number"} placeholder={"Nhập giá lớn hơn 0"}/>
                                            <div className="validatePrice">
                                                <p style={{color: "red"}}><ErrorMessage name={"price"}/></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="quantityProduct">
                                        <div className="label4">
                                            Số lượng :
                                        </div>
                                        <div className="quantityDetail">
                                            <Field name={"stockQuantity"} type={"number"}
                                                   placeholder={"Nhập số lượng lớn hơn 0"}/>
                                            <div className="validateQuantity">
                                                <p style={{color: "red"}}><ErrorMessage name={"stockQuantity"}/></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="categoryProduct">
                                        <div className="label5">
                                            Loại sản phẩm :
                                        </div>
                                        <Field name={"category.id"} as={"select"}>
                                            {
                                                categories.map((category) => {
                                                    return <>
                                                        <option value={category.id}>{category.name}</option>
                                                    </>
                                                })
                                            }
                                        </Field>
                                    </div>
                                    <div className="addProduct">
                                        <div className="cancel">
                                            <Link to={"/supplier"}>
                                                <button>Quay về</button>
                                            </Link>
                                        </div>
                                        <div className="add">
                                            <button type={"submit"}>Thêm</button>
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

export default AddProduct;
