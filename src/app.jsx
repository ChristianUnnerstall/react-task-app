import { useRef, useState } from "react";
import Editable from "./compoonents/editable";

export default function App() {
  const inputRef = useRef();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="app">
        <label>
            <span>Title</span>
            <Editable
                text={title}
                placeholder="Write a title"
                childRef={inputRef}
                type="text"
            >
                <input 
                    type="text"
                    name="text"
                    ref={inputRef}
                    placeholder="Write a title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} 
                />
            </Editable>
        </label>
        <label>
            <span>Description</span>
            <Editable
                text={description}
                placeholder="Description for the task"
                childRef={inputRef}
                type="textarea"
            >
                <textarea
                    name="description"
                    placeholder="Description for the task"
                    ref={inputRef}
                    rows="10"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </Editable>
        </label>
    </div>
  );
}