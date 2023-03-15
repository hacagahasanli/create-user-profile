import styled from "styled-components"

export const Form = () => {

    const submitHandler = () => {

    }

    return <StyledForm onSubmit={submitHandler}>
        <label htmlFor="author">Author</label>
        <input id="author" type="text" />
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="content">Content</label>
        <input id="content" type="text" />
        <button type="submit">Create</button>
    </StyledForm>

}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    width: 700px;


    input{
        width: 100%;
        padding: 0.3rem;
    }
    button{
        padding: .3rem;
        font-size: 1rem;
    }
`