import { useLoaderData } from "react-router-dom"

export default function Task() {

    const { data } = useLoaderData()

    return (
        <>
            <h1>Task</h1>
            <label>
                <span>Title</span>
                <div className="textValue">
                    <span>
                        {data.title}
                    </span>
                </div>
            </label>
            <label>
                <span>Description</span>
                <div className="textValue">
                    <span>
                        {data.description}
                    </span>
                </div>
            </label>
        </>
    )
}