import { useRef, useState } from "react";
import Editable from "./compoonents/editable";

export default function App() {
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

    const handleSave = (e) => {
        e.preventDefault();
        console.log(data)
    }

    const handleReset = (e) => {
        e.preventDefault();
        setData({
            "title": "", 
            "description": ""
        })
    }

    return (
        <div className="app">
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
        </div>
    );
}