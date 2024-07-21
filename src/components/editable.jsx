import { useEffect, useState } from "react";

export default function Editable({childRef, text, type, placeholder, children, ...props}) {
    const [isEditing, setEditing] = useState(false);
    const [initialValue, setInitialValue] = useState(text)

    useEffect(() => {
        if (childRef && childRef.current && isEditing === true) {
          childRef.current.focus();
        }
      }, [isEditing, childRef]);

    const handleKeyDown = (event, type) => {
        const { key } = event;
        const escapeKey = "Escape"
        const tabKey = "Tab";
        const enterKey = "Enter";
        const allKeys = [tabKey, enterKey]; 

        if (escapeKey === key) {
            console.log(initialValue)
        }

        if (
            (type === "textarea" && tabKey === key) ||
            (type !== "textarea" && allKeys.indexOf(key) > -1)
        ) {
        setEditing(false);
        }
    };

    function handleSetEditMode() {
        setInitialValue(text)
        setEditing(true)
    };

    return (
        <>
            <div className={`editable ${type}`}>
                {isEditing ? (
                    <div
                        className="textInput"
                        onBlur={() => setEditing(false)}
                        onKeyDown={e => handleKeyDown(e, type)}
                        >
                            {children}
                    </div>
                ) : (
                    <div
                        className="textValue"
                        onClick={handleSetEditMode}
                        >
                        <span>
                            {text || placeholder || "Editable content"}
                        </span>
                    </div>
                )}
            </div>
        </>    
    )

}