import toast, {Toaster} from "react-hot-toast";
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
            .positive('Giá sản phẩm phải lớn hơn 0!')
            .required('Vui lòng nhập đủ thông tin!'),
        stockQuantity: Yup.number()
            .positive('Số lượng sản phẩm phải lớn hơn 0!')
            .integer('Số lượng là số nguyên!')
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
    const Create = (values) => {
        values.photo = photo;
        try {
            dispatch(add(values)).then(()=>{
                toast.success('Thêm mới sản phẩm thành công!');
                setTimeout(() => {
                    navigate("/supplier/products");
                },1000);
            })
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        const files = e.target.files;
        const remainingSlots = 9 - photo.length;

        if (files.length > remainingSlots) {
            alert("Bạn chỉ có thể thêm tối đa 9 ảnh.");
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


    const handleDeleteImage = (index) => {
        const newPhotoArray = [...photo];
        newPhotoArray.splice(index, 1);
        setPhoto(newPhotoArray);
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="mainAddPr">
                <Formik initialValues={{
                    productName: "",
                    description: "",
                    price: "",
                    stockQuantity: "",
                    category: {
                        id: 1
                    },
                    account: {
                        id: accountSupplier.id
                    }

                }} onSubmit={Create}
                        validationSchema={addSchema}>
                    <Form>
                        <div className="body-add">
                            <div className="form-image">
                                <div className="list-image">
                                    <div className="img">
                                        {
                                            photo && photo.map((p, index) => (
                                                <div key={index} className={"imageContainer"}>
                                                    <img src={p.photoName} style={{width: "128px", height: "130px"}}
                                                         alt=""/>
                                                    <button className={"delete-Button"} onClick={() => {
                                                        handleDeleteImage(index)
                                                    }}>X
                                                    </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="file">
                                    <Field type={"file"} className={"upload"} multiple name={"photo.photoName"}
                                           onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="form-input">

                                <div className="infoProducts">
                                    <div className="name-product">
                                        <div className="label">Nhập Tên :</div>
                                        <div className="productName">
                                            <Field name={"productName"} placeholder={"Tên Sản Phẩm"}></Field>
                                            <div className="validateNameProduct">
                                                <p style={{color: "red", fontSize: "14px", paddingTop: "5px"}}>
                                                    <ErrorMessage name={"productName"}/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description-product">
                                        <div className="label-des">Mô Tả :</div>
                                        <div className="description">
                                            <Field name={"description"} as={"textarea"} className={"textarea"}
                                                   placeholder={"Mô Tả"}></Field>
                                            <p style={{color: "red", fontSize: "14px"}}><ErrorMessage
                                                name={"description"}/></p>
                                        </div>
                                    </div>
                                    <div className="price-product">
                                        <div className="label-price">
                                            Giá Tiền(VND):
                                        </div>
                                        <div className="price">
                                            <Field name={"price"} type={"number"} placeholder={"Giá Tiền"}></Field>
                                            <p style={{color: "red", fontSize: "14px", paddingTop: "5px"}}><ErrorMessage
                                                name={"price"}/></p>
                                        </div>
                                    </div>
                                    <div className="quantity-product">
                                        <div className="label-quantity">
                                            Số Lượng Sản Phẩm:
                                        </div>
                                        <div className="quantity">
                                            <Field name={"stockQuantity"} type={"number"}
                                                   placeholder={"Số Lượng Sản Phẩm"}></Field>
                                            <p style={{color: "red", fontSize: "14px", paddingTop: "5px"}}><ErrorMessage
                                                name={"stockQuantity"}/></p>
                                        </div>
                                    </div>
                                    <div className="category-product">
                                        <div className="label-category">Loại Sản Phẩm</div>
                                        <Field name={"category.id"} as={"select"} className={"select-category"}>
                                            {
                                                categories.map(category => (
                                                    <>
                                                        <option value={category.id}>{category.name}</option>
                                                    </>
                                                ))
                                            }
                                        </Field>
                                    </div>
                                    <div className="create-product">
                                        <div className="add">
                                            <button type={"submit"} className={"save"}>Thêm</button>
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
