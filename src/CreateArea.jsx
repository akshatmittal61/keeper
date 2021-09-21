import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
    const [Expanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        key: 0,
        title: "",
        content: ""
    });
    function handleChange(event) {
        const { value, name } = event.target;
        setNote(() => {
            if (name === "title") {
                return {
                    key: 0,
                    title: value,
                    content: note.content
                };
            }
            else if (name === "content") {
                return {
                    key: 0,
                    title: note.title,
                    content: value
                }
            }
        })
    }
    function expand() {
        setExpanded(true);
    }
    return (
        <div>
            <form className="create-note">
                {Expanded && <input
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />}
                <textarea
                    name="content"
                    placeholder="Take A Note..."
                    rows={Expanded ? 5 : 1}
                    value={note.content}
                    onChange={handleChange}
                    onClick={expand}
                />
                <Zoom in={Expanded}>
                    <Fab onClick={(event) => {
                        event.preventDefault();
                        props.onAdd(note);
                        setNote(() => {
                            return {
                                key: 0,
                                title: "",
                                content: ""
                            }
                        })
                    }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;