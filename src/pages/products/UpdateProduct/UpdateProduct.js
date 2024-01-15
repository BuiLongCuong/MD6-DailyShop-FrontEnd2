import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {storage} from "../../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
import {getAllCategories} from "../../../redux/service/categoryService";
import {updateForm, UpdateService} from "../../../redux/service/productService";

export function UpdateProduct() {
    const accountSupplier = JSON.parse(localStorage.getItem('currentSupplier'))
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const [photoUpload, setPhotoUpload] = useState([])
    const [fetched, setFetched] = useState(false);
    const categories = useSelector(({categories}) => {
        return categories.list
    })
    const product = useSelector(({products}) => {
        return products.productEdit
    })
        console.log(product)

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(updateForm(id))
            await dispatch(getAllCategories())
            await setPhotoUpload(product.photo)
            console.log(photoUpload)
            setFetched(true)
        }

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
                        enableReinitialize={true}
                >
                    <Form>

                        {
                            (
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
                                        fetched && photoUpload?.map((p, index) => (
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
                                        </div>
                                    </div>
                                    <div className="descriptionProduct">
                                        <div className="label2">
                                            Mô tả :
                                        </div>
                                        <div className="descriptionDetail">
                                            <Field as="textarea" cols={39} rows={4} name={"description"}
                                                   placeholder={"Mô tả sản phẩm"}/>
                                        </div>
                                    </div>
                                    <div className="priceProduct">
                                        <div className="label3">
                                            Giá (VNĐ) :
                                        </div>
                                        <div className="priceDetail">
                                            <Field name={"price"} type={"number"} placeholder={"Nhập giá lớn hơn 0"}/>
                                        </div>
                                    </div>
                                    <div className="quantityProduct">
                                        <div className="label4">
                                            Số lượng :
                                        </div>
                                        <div className="quantityDetail">
                                            <Field name={"stockQuantity"} type={"number"}
                                                   placeholder={"Nhập số lượng lớn hơn 0"}/>
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
                                        <button type={"submit"}>Thêm</button>
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