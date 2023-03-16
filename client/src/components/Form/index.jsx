import { useDispatch } from "react-redux"
import styled from "styled-components"
import { createProfile } from "../../store/slices/profile"
import { Formik, Form as Formi, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";

const min = (name, limit = 5) => `${name} must be at least ${limit} characters`
const max = (name, limit = 25) => `${name} must be less than ${limit} characters`
const req = (name) => `${name} is required`

const validationSchema = Yup.object().shape({
    author: Yup.string()
        .min(5, min("Author"))
        .max(25, max("Author"))
        .required(req("Author")),
    title: Yup.string()
        .min(5, min('Title'))
        .max(25, max('Title'))
        .required(req(`Title`)),
    content: Yup.string()
        .min(15, min('Content', 15))
        .max(100, min('Content', 100))
        .required(req('Content')),
    // image: Yup.mixed()
    //     .test("fileType", "Only images are allowed", (value) => {
    //         console.log(value, "VALUES");
    //         return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
    //     })
    //     .required("Please upload an image"),
})


export const Form = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState()

    const initialValues = {
        author: '',
        title: '',
        content: '',
        image: "    "
    };

    const submitHandler = async (values, { setSubmitting }) => {
        setSubmitting(false)
        const formData = new FormData();

        Object.entries(values).map(([key, value]) =>
            formData.append(key, value)
        )

        console.log(formData, "FORM DATA");
        // dispatch(createProfile(formData))
        try {
            const res = await fetch('http://localhost:5000/ms/new-profile', {
                method: 'POST',
                body: formData
            })
            const data = await res.json()
            console.log(data, "DATA");
        } catch (e) { }

    }

    const labels = [
        {
            value: "Author",
            id: "author",
            name: "author"
        },
        {
            value: "Title",
            id: "title",
            name: "title"
        },
        {
            value: "Content",
            id: "content",
            name: "content",
        },
    ]

    return <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
        {({ isSubmitting, setFieldValue }) => (
            <StyledForm>
                {labels?.map(({ value, id, name, type = "text" }) => (
                    <label htmlFor={id} key={id}>
                        {value}:
                        <Input {...{ id, name, type }} />
                        <ErrorMessage {...{ name }} />
                    </label>
                ))}
                <label htmlFor="image">
                    <Field
                        id="image"
                        name="image"
                        type="file"
                        value={""}
                        accept="image/*"
                        onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]);
                        }}
                    />
                </label>
                <button type="submit" disabled={isSubmitting}>{"Add Profile"}</button>
            </StyledForm>
        )}
    </Formik>

}

const StyledForm = styled(Formi)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    width: 700px;

    button{
        max-width: 100%;
        min-width: 150px;
        padding: .3rem;
        font-size: 1rem;
        cursor: pointer;
        margin: 0 auto;
    }
`
const Input = styled(Field)`
    width: 100%;
    padding: 0.3rem;
    max-height: 40px;
`