import { useRef, useState } from "react";
import Editable from "./editable";
import toast, { Toaster } from "react-hot-toast";

export default function NewTask() {
    const inputRef = useRef();
  
    const [data, setData] = useState({
        "title": "", 
        "description": ""
    })

    const handleChange = (e) => {                
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async(e) => {
        e.preventDefault();
        try {
			console.log(data)
			const response = await fetch(process.env.REACT_APP_REMOTE_API_URL_BASE + '/tasks/', {
				method: 'POST',
				headers: {
				  Accept: 'application/json',
				  'Content-Type': 'application/json',
				  "Access-Control-Allow-Origin": "*"
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log('Promise resolved and HTTP status is successful');
				toast.success('Success!');
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
        setData({
            "title": "", 
            "description": ""
        })
    }

    return (
        <>
            <Toaster />
            <h1>New Task</h1>
            <form onSubmit={handleSave}>
                <label>
                    <span>Title</span>
                    <Editable
                        text={data.title}
                        placeholder="Write a title"
                        childRef={inputRef}
                        type="text"
                    >
                        <input 
                            type="text"
                            name="title"
                            ref={inputRef}
                            placeholder="Write a title"
                            value={data.title}
                            onChange={handleChange} 
                        />
                    </Editable>
                </label>
                <label>
                    <span>Description</span>
                    <Editable
                        text={data.description}
                        placeholder="Description for the task"
                        childRef={inputRef}
                        type="textarea"
                    >
                        <textarea
                            name="description"
                            placeholder="Description for the task"
                            ref={inputRef}
                            rows="10"
                            value={data.description}
                            onChange={handleChange}
                        />
                    </Editable>
                </label>
                
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
        </>
    );
}