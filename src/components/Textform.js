import React,{ useState} from 'react'
import testUtils from 'react-dom/test-utils';

export default function Textform(props) {
    const handleUpClick=()=>{
         console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to upercase!","Sucess");
    }
    const handleLoClick=()=>{
        console.log("Uppercase was clicked"+ text);
       let newText = text.toLowerCase();
       setText(newText)
       props.showalert("Converted to lowercase!","Sucess");
       
   }
   const handleClearClick=()=>{
    console.log("Uppercase was clicked"+ text);
   let newText = '';
   setText(newText)
//    search word counter for more function like lower case,clear etc...
   
}
    
    const handleOnChange=(event)=>{

        setText(event.target.value)
    }
    const [text, setText] = useState(' ');
    // setText("newtext");
  return (
      <>
      
    <div className="container">
        <h1>{props.heading }</h1>
        <div className="mb-3">
        {/* <label htmlFor="Textarea" class = "form-label">Textarea </label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange}
        style={{backgroundColor:props.mode==='light'?'white':'grey'}} 
        id="Textarea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick = {handleLoClick}>convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick = {handleClearClick}>clear text </button>
            </div>
            <div className="container my-3">
                <h2>your text summery</h2>
                <p>{text.split(" ").length} words,characters {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
             
            </>
  )
}
