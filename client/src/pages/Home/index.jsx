import { useEffect } from "react"
import { getAllProfiles } from "../../store/slices/profile"
import { useDispatch } from "react-redux"
import { Card } from "../../components"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    return <>
        <Card />
    </>
}

export default Home