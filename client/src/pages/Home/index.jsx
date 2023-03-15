import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Card, Form } from "../../components"
import { getAllProfiles } from "../../store"

export const Home = () => {
    const dispatch = useDispatch()
    const { allProfiles } = useSelector(state => state.profile)

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    return <Container>
        <Form />
        <Card profiles={allProfiles} />
    </Container>
}


const Container = styled.div`
    max-width: 1140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    margin: 0 auto;

`
