import { Link, useLoaderData } from "react-router-dom";

export default function Tasks() {
    const { data } = useLoaderData();

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {data.map((task) => {
                    return(<li key={task._id.$oid}><Link to={"/tasks/" + task._id.$oid}>{task.title}</Link></li>)
                })}
            </ul>
        </>
    )
}