import toast, {Toaster} from "react-hot-toast";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {getAllCategories} from "../../../redux/service/categoryService";
import {updateForm, UpdateService} from "../../../redux/service/productService";
import * as React from "react";
import * as Yup from "yup";

export function UpdateProduct() {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const [photoUpload, setPhotoUpload] = useState([])
    const categories = useSelector(({categories}) => {
        return categories.list
    })
    const product = useSelector(({products}) => {
        return products.productEdit
    })

    const updateSchema = Yup.object().shape({
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
        dispatch(getAllCategories());
        dispatch(updateForm(id)).then(({payload}) => {
            setPhotoUpload(payload.photo);
        });
    }, []);

    const Update = (values) => {
        let productEdit = {...values}
            productEdit.photo = photoUpload
            dispatch(UpdateService(productEdit)).then(() => {
                toast.success('Chỉnh sửa thông tin sản phẩm thành công!');
                setTimeout(() => {
                    navigate("/supplier/products");
                },1000);
            })

    }
    const handleChange = (e) => {
        const files = e.target.files
        const remainingSlots = 6 - photoUpload.length;

        if (files.length > remainingSlots) {
            alert("Bạn chỉ có thể thêm tối đa 6 ảnh.");
            return;
        }
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const photoRef = ref(storage, `image/${file.name + v4()}`)
            uploadBytes(photoRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setPhotoUpload((state) => [...state, {photoName: url}]);
                });
            });
        }
    }
    const handleDeleteImage = (index) => {
        const newPhotoArray = [...photoUpload];
        newPhotoArray.splice(index, 1);
        setPhotoUpload(newPhotoArray);
    };


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="mainAddPr">
                <Formik initialValues={product} onSubmit={Update}
                        validationSchema={updateSchema}
                        enableReinitialize={true}>
                    <Form>
                        <div className="body-add">
                            <div className="form-image">

                                <div className="list-image">
                                    <div className="img">
                                        {
                                            photoUpload && photoUpload.map((p, index) => (
                                                <div key={index} className={"imageContainer"}>
                                                    <img src={p.photoName} style={{width: "128px", height: "130px"}}
                                                         alt=""/>
                                                    <button className={"delete-Button"} type={"button"} onClick={() => {
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
                                                <p style={{color: "red", fontSize: "14px", paddingTop: "5px"}}><ErrorMessage
                                                    name={"productName"}/></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description-product">
                                        <div className="label-des">Mô Tả :</div>
                                        <div className="description">
                                            <Field name={"description"} as={"textarea"} placeholder={"Mô Tả"}  className={"textarea"}></Field>
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
                                            <p style={{color: "red", fontSize: "14px", paddingTop: "5px"}}><ErrorMessage name={"price"}/>
                                            </p>
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
                                            <button type={"submit"} className={"save"}>Sửa</button>
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