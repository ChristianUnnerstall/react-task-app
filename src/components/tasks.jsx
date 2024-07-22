import { Link, useLoaderData } from "react-router-dom";

export default function Tasks() {
    const { data } = useLoaderData();

    return (
        <div className="detail">
            <h1>Tasks</h1>
            <ul>
                {data.map((task) => {
                    return(
                        <li key={task._id.$oid}>
                            <Link to={"/tasks/" + task._id.$oid}>
                                <span className="title">{task.title}</span>
                            </Link>
                            {task.status ? 
                                <span className="badge status">{task.status}</span>
                                :
                                null
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}