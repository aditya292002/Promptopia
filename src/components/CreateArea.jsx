import { useState, React} from "react";

function CreateArea(props) { 
  const [isExpand, setExpand] = useState(false);

    const [prompt, setPrompt] = useState({
        title: "",
        description:"",
        tags:""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setPrompt(prevPrompt => {
            return {
                ...prevPrompt,
                [name]: value
            };
        });
    }
    
    function handleSubmit(event) {
        if(prompt.title.length > 0 && prompt.description.length > 0 && prompt.tags.length > 0) {
            props.onAdd(prompt);
            console.log("now need to clear");
        }
        else {
            alert("Please complete the form !");
        }
        setPrompt({
            title:"",
            description:"",
            tags:""
        });
        event.preventDefault();
    }

    return (
        <>
            <form className="create-note">
                <input type="text" name="title" id="" placeholder="Title" onChange={handleChange} value={prompt.title} onClick={()=>setExpand(true)} />
                {isExpand && <input type="text" name="description" id="" placeholder="Describe your Prompt..."  onChange={handleChange} value={prompt.description} />}
                {isExpand && <input type="text" name="tags" id="" placeholder="Add Tags" onChange={handleChange} value={prompt.tags} />}
                {props.userIs? <button onClick={handleSubmit}>Add</button>: <button onClick={() => alert("Please login to add a prompt.")}>Add</button>}  
            </form>
        </>
    );
}

export default CreateArea;
