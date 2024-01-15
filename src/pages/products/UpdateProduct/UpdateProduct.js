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
        const fetchData = async () => {
            await dispatch(getAllCategories());
            await dispatch(updateForm(id));
            setPhotoUpload(product.photo);
        };

        fetchData();
    }, []);

    const Update = (values) => {
        let productEdit = {...values}
            productEdit.photo = photoUpload
            dispatch(UpdateService(productEdit))
        navigate("/supplier/products")
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
                    setPhotoUpload((prev) => [...prev, {photoName: url}]);
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
                    product
                } onSubmit={Update}
                        validationSchema={updateSchema}
                        enableReinitialize={true}
                >
                    <Form>

                        {
                            photoUpload && photoUpload.length < 6 && (
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
                                        photoUpload && photoUpload.map((p, index) => (
                                            <div key={index} className="imageContainer">
                                                <img src={p.photoName} alt=""
                                                     style={{width: "242px", height: "242px"}}/>
                                                <button type={"button"} className="deleteButton"
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
                                            <Link to={"/supplier/products"}>
                                                <button>Quay về</button>
                                            </Link>
                                        </div>
                                        <div className="add">
                                            <button type={"submit"}>Sửa</button>
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