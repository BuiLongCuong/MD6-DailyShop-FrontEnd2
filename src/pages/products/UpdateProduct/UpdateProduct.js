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

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(updateForm(id))
    }, []);

    const Update = (values) => {
        let productEdit = {...values}
        if (photoUpload.length !== 0) {
            productEdit.photo = photoUpload
            dispatch(UpdateService(productEdit))
            navigate("/list")
        }
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

    return (
        <>
            <Formik initialValues={product
            } onSubmit={Update}
                    enableReinitialize={true}>
                <Form>
                    <Field name={"productName"}></Field>
                    <Field name={"description"}></Field>
                    <Field name={"price"}></Field>
                    <Field name={"stockQuantity"}></Field>
                    <Field name={"category.id"} as={"select"}>
                        {
                            categories.map((category) => {
                                return <>
                                    <option value={category.id}>{category.name}</option>
                                </>
                            })
                        }
                    </Field>
                    <Field name={"photo.photoName"} type={"file"} multiple onChange={handleChange}/>
                    {
                        product.photo && product.photo.map((photo) => {
                            return (
                                <>
                                    <img src={photo.photoName} alt=""/>
                                </>
                            )
                        })
                    }
                    {
                        photoUpload.map(p => (
                            <>
                                <img src={p.photoName} alt=""/></>
                        ))
                    }
                    <button>Sửa</button>
                </Form>

            </Formik>
        </>
    )
}