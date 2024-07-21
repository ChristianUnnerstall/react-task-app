import { useLoaderData } from "react-router-dom"

export default function Task() {

    const { data } = useLoaderData()

    return (
        <>
            <h1>Task</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </>
    )
}