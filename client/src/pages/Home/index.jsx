import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../../components"
import { getAllProfiles } from "../../store"

export const Home = () => {
    const dispatch = useDispatch()
    const { allProfiles } = useSelector(state => state.profile)

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    return <>
        <Card profiles={allProfiles} />
    </>
}

