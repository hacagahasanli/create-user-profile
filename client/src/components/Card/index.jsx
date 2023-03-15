import styled from "styled-components"

export const Card = ({ profiles }) => {
    console.log(profiles, "PROFILS")
    return <CardContainer> {
        profiles?.map(({ _id, author, title, content }) => (
            <ul key={_id}>
                <li>{author}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        ))
    }
    </CardContainer>
}

const CardContainer = styled.div`
    max-width: 400px;
    display: grid;
    grid-template-columns: repeat(4,minmax(120px,1fr));
    place-items: center;
    margin: 0 auto;
`