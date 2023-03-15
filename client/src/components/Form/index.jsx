import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { createProfile } from "../../store/slices/profile"
import { Formik, Form as Formi, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
        .required(req('Content'))
})

export const Form = () => {
    const dispatch = useDispatch()

    const initialValues = {
        author: '',
        title: '',
        content: ''
    };

    const submitHandler = (values, { setSubmitting }) => {
        console.log(values, "VALUES");
        setSubmitting(false)
        dispatch(createProfile(values))
    }

    return <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validationSchema}>
        {({ isSubmitting }) => (
            <StyledForm>
                <label htmlFor="author">
                    Author:
                    <Input id="author" name="author" type="text" />
                    <ErrorMessage name="author" />
                </label>
                <label htmlFor="title">
                    Title:
                    <Input id="title" name="title" type="text" />
                    <ErrorMessage name="title" />
                </label>
                <label htmlFor="content">
                    Content
                    <Input id="content" name="content" type="text" />
                    <ErrorMessage name="content" style={{ color: "red" }} />
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
`