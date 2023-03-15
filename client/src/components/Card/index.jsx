import { useDispatch } from "react-redux"
import styled, { css } from "styled-components"

export const Card = ({ profiles }) => {
    const dispatch = useDispatch()

    const editHandler = (profile, index) => {

    }

    return <CardContainer> {
        profiles?.map((profile) => {
            const { _id, author, title, content } = profile
            return <CardWrapper key={_id}>
                <ImageWrapper>
                    <img src="https://images.pexels.com/photos/5267663/pexels-photo-5267663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profile_logo" />
                </ImageWrapper>
                <Detail>
                    <span>{author}</span>
                    <span>{title}</span>
                    <span>{content}</span>
                </Detail>
                <button onClick={() => editHandler(profile, index)}>Edit</button>
            </CardWrapper>
        })
    }
    </CardContainer>
}

const flexHelper = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Detail = styled.div`
    ${flexHelper}
    gap:0.3rem;
`
const ImageWrapper = styled.div`
    width: 100%;
    img{
        width: 100%;
        min-height: 100px;
        max-height: 200px;
        object-fit: cover;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`
const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4,minmax(150px,1fr));
    place-items: center;
    margin: 0 auto;
    gap:2rem;
    color: #ffffff;
    
`
const CardWrapper = styled.div`
    margin: 0;
    padding: 0;
    border: 2px solid #A9AF7E;
    background-color: #7D8F69;
    border-radius: 8px;
    ${flexHelper}
    gap: 1rem;
    width: 100%;
    min-height: 300px;

    button{
        width:100%;
        padding:0.4rem;
        font-weight: 600;
        font-size: .9rem;
        cursor: pointer;
    }
`
