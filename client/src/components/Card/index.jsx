export const Card = ({ profiles }) => {
    return <> {
        profiles?.map(({ _id, author, title, content }) => (
            <ul key={_id}>
                <li>{author}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        ))
    }
    </>
}

