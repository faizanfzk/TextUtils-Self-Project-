import { useState } from "react"

export const TextForm=(props)=>{
    const [text,setText]=useState("Write here")

    const handleChange=()=>{
      
        setText( text.toUpperCase())
    }
    const handle=(e)=>{
setText(e.target.value)
    }
    const tolower=()=>{
        setText(text.toLowerCase())
    }
    const toclear=()=>{
        setText("")
    }

    
    return(
        <>

        <div className="container my-4">
        <h1 className="my-3">{props.name} </h1>
   
        <div className="form-floating">
        <textarea className="form-control" value={text} onChange={handle} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"200px"}}></textarea>
        <label htmlFor="floatingTextarea2"></label>
      </div> 
     
             

<button type="button" className="btn btn-outline-primary mx-2 my-3" onClick={handleChange}>UpperCase</button>
       

<button type="button" className="btn btn-outline-primary mx-2" onClick={tolower}>LowerCase</button>
<button type="button" className="btn btn-outline-primary" onClick={toclear}>ClearAll</button>



   
</div>
<div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and has {text.length}  characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text:"Write something above to preview here"}</p>
</div>



      </>
    )
}