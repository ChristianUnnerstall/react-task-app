import { useRef,useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom"
import Editable from "./editable";

export default function Task() {
    const inputRef = useRef();
    const { data } = useLoaderData()
    
    const [updatedData, setData] = useState(data)
    const initialData = data;

    const statusOptions = ["open", "closed", "in progress", "on hold"]

    const handleChange = (e) => {                
        setData({
            ...updatedData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async(e) => {
        e.preventDefault();
        try {
			console.log(data)
			const response = await fetch(process.env.REACT_APP_REMOTE_API_URL_BASE + '/tasks/' + initialData._id.$oid, {
				method: 'PUT',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				  "Access-Control-Allow-Origin": "*"
				},
				body: JSON.stringify(updatedData),
			});

			if (response.ok) {
				console.log('Promise resolved and HTTP status is successful');
				toast.success('Task updated successfully!');
			} else {
				toast.error('Something went wrong!'); 
				// Custom message for failed HTTP codes
				if (response.status === 404) throw new Error('404, Not found');
				if (response.status === 500) throw new Error('500, internal server error');
				
				// For any other server error
				throw new Error(response.status);
			}
		} catch (error) {
			console.error('Fetch', error);
			// Output e.g.: "Fetch Error: 404, Not found"
		}

    }

    const handleReset = (e) => {
        e.preventDefault();
        setData(initialData)
    }

    return (
        <div className="detail">
            <Toaster/>
            <h1>Task</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    <span>Title</span>
                    <Editable
                        text={updatedData.title}
                        placeholder="Write a title"
                        childRef={inputRef}
                        type="text"
                    >
                        <input 
                            type="text"
                            name="title"
                            ref={inputRef}
                            placeholder="Write a title"
                            value={updatedData.title}
                            onChange={handleChange} 
                        />
                    </Editable>
                </label>
                <label>
                    <span>Description</span>
                    <Editable
                        text={updatedData.description}
                        placeholder="Description for the task"
                        childRef={inputRef}
                        type="textarea"
                    >
                        <textarea
                            name="description"
                            placeholder="Description for the task"
                            ref={inputRef}
                            rows="10"
                            value={updatedData.description}
                            onChange={handleChange}
                        />
                    </Editable>
                </label>
                <label>
                    <span>Status</span>
                    <Editable
                        text={updatedData.status}
                        placeholder="Status for the task"
                        childRef={inputRef}
                        type="select"
                    >
                        <select
                            name="status"
                            placeholder="Status for the task"
                            ref={inputRef}
                            value={updatedData.status}
                            onChange={handleChange}
                        >
                            {statusOptions.map((option, index) => {
                                return (<option key={index}>{option}</option>)
                            })}
                            
                        </select>
                    </Editable>
                </label>
                
                <button type="button" onClick={handleUpdate}>Update</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    )
}