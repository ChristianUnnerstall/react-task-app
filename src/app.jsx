import { useRef, useState } from "react";
import Editable from "./compoonents/editable";

export default function App() {
  const inputRef = useRef();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSave() {}

  return (
    <div className="app">
<h1>New Task</h1>
<form onSubmit={handleSave}>
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
<button type="button">Save</button>
</form>
    </div>
  );
}